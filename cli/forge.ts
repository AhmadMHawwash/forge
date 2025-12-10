#!/usr/bin/env -S bun --no-check

/**
 * FORGE CLI - Interactive Profile Builder
 * 
 * Usage:
 *   bun run forge            # Interactive mode
 *   bun run forge --help     # Show help
 */

import * as p from "@clack/prompts";
import { readdir, readFile, writeFile, mkdir, copyFile } from "fs/promises";
import { join, dirname } from "path";
import { existsSync } from "fs";
import { discoverComponents, composeProfile, type Component } from "./utils/components";

const SAVED_PROFILES_DIR = join(process.cwd(), ".forge", "creations");

interface SavedProfile {
  name: string;
  createdAt: string;
  foundation?: string;
  overlays: string[];
  goal?: string;
  resources?: string[];
}

async function loadSavedProfiles(): Promise<SavedProfile[]> {
  const indexPath = join(SAVED_PROFILES_DIR, "index.json");
  if (!existsSync(indexPath)) {
    return [];
  }
  try {
    const content = await readFile(indexPath, "utf-8");
    return JSON.parse(content);
  } catch {
    return [];
  }
}

async function saveProfileIndex(profiles: SavedProfile[]): Promise<void> {
  await mkdir(SAVED_PROFILES_DIR, { recursive: true });
  await writeFile(join(SAVED_PROFILES_DIR, "index.json"), JSON.stringify(profiles, null, 2));
}

const ROOT_DIR = join(import.meta.dir, "..");

async function copyDir(src: string, dest: string) {
  await mkdir(dest, { recursive: true });
  const entries = await readdir(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = join(src, entry.name);
    const destPath = join(dest, entry.name);

    if (entry.isDirectory()) {
      await copyDir(srcPath, destPath);
    } else {
      await copyFile(srcPath, destPath);
    }
  }
}

async function installFramework() {
  const targetDir = join(process.cwd(), ".forge", "framework");

  if (existsSync(targetDir)) {
    const overwrite = await p.confirm({
      message: `Framework already installed at ${targetDir}. Overwrite?`,
      initialValue: false,
    });
    if (p.isCancel(overwrite) || !overwrite) return;
  }

  const s = p.spinner();
  s.start("Installing framework files...");

  try {
    const components = ["foundations", "overlays", "goals", "engines", "verification-templates", "resources"];

    for (const component of components) {
      s.message(`Copying ${component}...`);
      const src = join(ROOT_DIR, component);
      const dest = join(targetDir, component);

      // Check if source exists (it should)
      if (existsSync(src)) {
        await copyDir(src, dest);
      }
    }

    // Copy README as well
    await copyFile(join(ROOT_DIR, "README.md"), join(targetDir, "README.md"));

    s.stop(`Framework installed successfully to ${targetDir}`);

    p.note(
      `You can now customize these files or reference them directly.\nLocation: ./.forge/framework/`,
      "Installation Complete"
    );

  } catch (error) {
    s.stop("Installation failed");
    p.log.error(String(error));
  }
}

async function main() {
  console.clear();

  p.intro("🔥 FORGE - Interactive Profile Builder");

  const components = await discoverComponents();
  const savedProfiles = await loadSavedProfiles();

  // Main menu
  const action = await p.select({
    message: "What would you like to do?",
    options: [
      { value: "install", label: "📥 Install framework", hint: "Copy framework files to local project" },
      { value: "create", label: "🆕 Create a new profile", hint: "Interactive setup" },
      { value: "load", label: "📂 Load saved profile", hint: "View or copy existing" },
      { value: "list", label: "📄 List components", hint: "View all available options" },
    ],
  });

  if (p.isCancel(action)) {
    p.cancel("Goodbye!");
    process.exit(0);
  }

  if (action === "create") {
    await createProfile(components, savedProfiles);
  } else if (action === "install") {
    await installFramework();
  } else if (action === "load") {
    await viewSavedProfiles(savedProfiles, components);
  } else if (action === "list") {
    await listComponents(components);
  }

  p.outro("Thanks for using FORGE! 🔥");
}

async function createProfile(components: Awaited<ReturnType<typeof discoverComponents>>, savedProfiles: SavedProfile[]) {
  // Step 1: Select Goal (Workflow)
  const goal = await p.select({
    message: "Select a goal workflow:",
    options: [
      { value: null, label: "⏭️ Skip", hint: "No specific goal workflow" },
      ...components.goals.map(g => ({
        value: g,
        label: formatName(g.name),
        hint: g.description.slice(0, 60),
      })),
    ],
  });

  if (p.isCancel(goal)) return;

  // Step 2: Select Foundation (Role)
  const foundation = await p.select({
    message: "Select a foundation role:",
    options: components.foundations.map(f => ({
      value: f,
      label: formatName(f.name),
      hint: f.description.slice(0, 60),
    })),
  });

  if (p.isCancel(foundation)) return;

  // Step 3: Select Resources (multi-select)
  const resourceOptions = components.resources.map(r => ({
    value: r,
    label: `${r.category ? `[${r.category}]` : "[Resource]"} ${formatName(r.name)}`,
    hint: r.description.slice(0, 60),
  }));

  const selectedResources = await p.multiselect({
    message: "Select resources (stacks, domains):",
    options: resourceOptions,
    required: false,
  });

  if (p.isCancel(selectedResources)) return;
  const resources = selectedResources as Component[];

  // ---------------------------------------------------------
  // SMART RECOMMENDATIONS ENGINE
  // ---------------------------------------------------------
  const { recommender } = await import("./utils/recommendations");

  const context = {
    goal: goal as Component | undefined,
    role: foundation as Component | undefined,
    resources: resources
  };

  const recommendations = recommender.getRecommendations(context);

  const isRecommended = (comp: Component) => {
    return recommendations.has(comp.name);
  };

  const getRecommendationReason = (comp: Component) => {
    return recommendations.get(comp.name)?.reason;
  };

  // Step 4: Select Overlays (multi-select)
  // Sort overlays: Recommended -> by category priority -> alphabetical
  const categoryPriority: Record<string, number> = {
    "Execution Style": 1,
    "Thinking Pattern": 2,
    "Quality & Safety": 3,
    "Investigation": 4,
    "Design & Perspective": 5,
    "Communication": 6
  };

  const sortedOverlays = [...components.overlays].sort((a, b) => {
    // 1. Sort by recommendation score (High to Low)
    const recA = recommendations.get(a.name);
    const recB = recommendations.get(b.name);

    // If both recommended, higher score wins
    if (recA && recB) {
      if (recA.score !== recB.score) return recB.score - recA.score;
    }

    // If only one recommended, it wins
    if (recA && !recB) return -1;
    if (!recA && recB) return 1;

    // 2. Sort by category priority
    const catA = a.category || "General";
    const catB = b.category || "General";

    // ... (rest of sorting logic remains similar)
    const priorityA = categoryPriority[catA] || 50;
    const priorityB = categoryPriority[catB] || 50;
    if (priorityA !== priorityB) return priorityA - priorityB;

    // 3. Sort by category name
    if (catA !== catB) return catA.localeCompare(catB);

    // 4. Sort by name
    return a.name.localeCompare(b.name);
  });

  const overlayOptions = sortedOverlays.map(o => {
    const rec = recommendations.get(o.name);
    const prefix = rec ? "✨ " : "";
    const categoryLabel = o.category ? `[${o.category}]` : "[General]";
    const hint = rec ? `💡 ${rec.reason}` : (o.conflicts ? `⚠️ Conflicts: ${o.conflicts.join(", ")}` : undefined);

    return {
      value: o,
      label: `${prefix}${categoryLabel} ${formatName(o.name)}`,
      hint: hint,
    };
  });

  // Pre-select highly recommended items (score > 90)
  let currentSelection = sortedOverlays
    .filter(o => {
      const rec = recommendations.get(o.name);
      return rec && rec.score >= 90;
    });

  let overlays: Component[] = [];
  let confirmingSelection = true;

  while (confirmingSelection) {
    const selectedOverlays = await p.multiselect({
      message: "Select overlays (space to toggle, enter to confirm):",
      options: overlayOptions,
      required: false,
      initialValues: currentSelection as any
    });

    if (p.isCancel(selectedOverlays)) return;

    overlays = selectedOverlays as Component[];
    currentSelection = overlays;

    // Check for conflicts
    const conflicts = checkConflicts(overlays);

    if (conflicts.length > 0) {
      p.log.warning(`⚠️ Potential conflicts detected:`);
      conflicts.forEach(c => p.log.message(c)); // Print each conflict clearly

      const action = await p.select({
        message: "How would you like to proceed?",
        options: [
          { value: "modify", label: "⛔️ Modify selection", hint: "Go back and change your choices" },
          { value: "ignore", label: "⚠️ Ignore and continue", hint: "Keep current selection despite conflicts" },
          // { value: "cancel", label: "❌ Cancel", hint: "Abort profile creation" } // User can just Ctrl+C or use standard cancel
        ]
      });

      if (p.isCancel(action)) return;

      if (action === "modify") {
        // Loop continues, currentSelection is preserved
        continue;
      } else if (action === "ignore") {
        confirmingSelection = false;
      }
    } else {
      confirmingSelection = false;
    }
  }

  // Step 5: Select Verification Template (optional)
  // Smart suggest verification template
  const verificationOptions = [
    { value: null, label: "⏭️ Skip", hint: "No verification template" },
    ...components.verificationTemplates
      .sort((a, b) => {
        // Sort by suggestion score
        const scoreA = recommendations.get(a.name)?.score || 0;
        const scoreB = recommendations.get(b.name)?.score || 0;
        return scoreB - scoreA;
      })
      .map(v => {
        const rec = recommendations.get(v.name);
        const prefix = rec ? "✨ " : "";
        return {
          value: v,
          label: `${prefix}${formatName(v.name)}`,
          hint: rec ? `💡 ${rec.reason}` : v.description.slice(0, 60),
        };
      }),
  ];

  const verification = await p.select({
    message: "Include a verification template?",
    options: verificationOptions,
  });

  if (p.isCancel(verification)) return;

  // Generate profile
  const s = p.spinner();
  s.start("Composing profile...");

  const profile = await composeProfile({
    foundation: foundation as Component,
    overlays: overlays,
    goal: goal as Component | undefined,
    verificationTemplate: verification as Component | undefined,
    resources: resources,
  });

  s.stop("Profile composed!");

  // Step 6: Save options
  const saveAction = await p.select({
    message: "What would you like to do with this profile?",
    options: [
      { value: "clipboard", label: "📋 Copy to clipboard", hint: "Paste into your AI tool" },
      { value: "file", label: "💾 Save to file", hint: "Save as markdown file" },
      { value: "both", label: "📋💾 Both", hint: "Copy and save" },
      { value: "preview", label: "👁️ Preview only", hint: "Just show the profile" },
    ],
  });

  if (p.isCancel(saveAction)) return;

  let profileName = "untitled";

  if (saveAction === "file" || saveAction === "both") {
    const name = await p.text({
      message: "Profile name:",
      placeholder: "my-security-profile",
      validate: (value) => {
        if (!value) return "Please enter a name";
        if (!/^[a-z0-9-]+$/.test(value)) return "Use lowercase letters, numbers, and hyphens only";
      },
    });

    if (p.isCancel(name)) return;
    profileName = name;

    // Save profile file
    await mkdir(SAVED_PROFILES_DIR, { recursive: true });
    const filePath = join(SAVED_PROFILES_DIR, `${profileName}.md`);
    await writeFile(filePath, profile);

    // Update index
    const newProfile: SavedProfile = {
      name: profileName,
      createdAt: new Date().toISOString(),
      foundation: (foundation as Component)?.name,
      overlays: overlays.map((o: Component) => o.name),
      goal: (goal as Component | null)?.name,
      resources: resources.map(r => r.name),
    };
    savedProfiles.push(newProfile);
    await saveProfileIndex(savedProfiles);

    p.log.success(`Saved to: ${filePath}`);
  }

  if (saveAction === "clipboard" || saveAction === "both") {
    // Use pbcopy on macOS, or show instructions
    try {
      const proc = Bun.spawn(["pbcopy"], { stdin: "pipe" });
      proc.stdin.write(profile);
      proc.stdin.end();
      await proc.exited;
      p.log.success("Copied to clipboard! Paste into your AI tool.");
    } catch {
      p.log.warning("Could not copy to clipboard. Here's the profile:");
      console.log("\n" + profile);
    }
  }

  if (saveAction === "preview") {
    console.log("\n" + "─".repeat(60));
    console.log(profile);
    console.log("─".repeat(60) + "\n");
  }
}

async function viewSavedProfiles(savedProfiles: SavedProfile[], components: Awaited<ReturnType<typeof discoverComponents>>) {
  if (savedProfiles.length === 0) {
    p.log.info("No saved profiles yet. Create one first!");
    return;
  }

  const selection = await p.select({
    message: "Select a profile:",
    options: savedProfiles.map(profile => ({
      value: profile,
      label: profile.name,
      hint: `${profile.foundation || "No role"} + ${profile.overlays.length} overlays`,
    })),
  });

  if (p.isCancel(selection)) return;

  const selectedProfile = selection as SavedProfile;
  const filePath = join(SAVED_PROFILES_DIR, `${selectedProfile.name}.md`);

  const action = await p.select({
    message: `Profile: ${selectedProfile.name}`,
    options: [
      { value: "clipboard", label: "📋 Copy to clipboard" },
      { value: "preview", label: "👁️ Preview" },
      { value: "info", label: "ℹ️ Show details" },
    ],
  });

  if (p.isCancel(action)) return;

  if (action === "clipboard") {
    const content = await readFile(filePath, "utf-8");
    try {
      const proc = Bun.spawn(["pbcopy"], { stdin: "pipe" });
      proc.stdin.write(content);
      proc.stdin.end();
      await proc.exited;
      p.log.success("Copied to clipboard!");
    } catch {
      p.log.warning("Could not copy to clipboard.");
    }
  } else if (action === "preview") {
    const content = await readFile(filePath, "utf-8");
    console.log("\n" + "─".repeat(60));
    console.log(content);
    console.log("─".repeat(60) + "\n");
  } else if (action === "info") {
    p.log.info(`Name: ${selectedProfile.name}`);
    p.log.info(`Created: ${selectedProfile.createdAt}`);
    p.log.info(`Foundation: ${selectedProfile.foundation || "None"}`);
    p.log.info(`Overlays: ${selectedProfile.overlays.join(", ") || "None"}`);
    p.log.info(`Goal: ${selectedProfile.goal || "None"}`);
    p.log.info(`Resources: ${selectedProfile.resources?.join(", ") || "None"}`);
    p.log.info(`File: ${filePath}`);
  }
}

async function listComponents(components: Awaited<ReturnType<typeof discoverComponents>>) {
  const category = await p.select({
    message: "Which components would you like to see?",
    options: [
      { value: "foundations", label: "🧭 Foundations (Roles)", hint: `${components.foundations.length} available` },
      { value: "overlays", label: "⚡ Overlays (Behaviors)", hint: `${components.overlays.length} available` },
      { value: "goals", label: "🎯 Goals (Workflows)", hint: `${components.goals.length} available` },
      { value: "resources", label: "📚 Resources (Stacks, Domains)", hint: `${components.resources.length} available` },
      { value: "verification", label: "✅ Verification Templates", hint: `${components.verificationTemplates.length} available` },
      { value: "all", label: "📋 All components" },
    ],
  });

  if (p.isCancel(category)) return;

  console.log("\n");

  if (category === "foundations" || category === "all") {
    console.log("🧭 FOUNDATIONS (Roles)");
    console.log("─".repeat(40));
    for (const f of components.foundations) {
      console.log(`  ${formatName(f.name)}`);
      console.log(`    ${f.description}`);
    }
    console.log();
  }

  if (category === "overlays" || category === "all") {
    console.log("⚡ OVERLAYS (Behaviors)");
    console.log("─".repeat(40));
    const byCategory = groupByCategory(components.overlays);
    for (const [cat, overlays] of Object.entries(byCategory)) {
      console.log(`  [${cat || "General"}]`);
      for (const o of overlays) {
        console.log(`    ${formatName(o.name)}${o.conflicts ? ` ⚠️ Conflicts: ${o.conflicts.join(", ")}` : ""}`);
      }
    }
    console.log();
  }

  if (category === "resources" || category === "all") {
    console.log("📚 RESOURCES (Stacks, Domains)");
    console.log("─".repeat(40));
    for (const r of components.resources) {
      console.log(`  ${formatName(r.name)}`);
      if (r.category) console.log(`    [${r.category}]`);
      console.log(`    ${r.description}`);
    }
    console.log();
  }

  if (category === "goals" || category === "all") {
    console.log("🎯 GOALS (Workflows)");
    console.log("─".repeat(40));
    for (const g of components.goals) {
      console.log(`  ${formatName(g.name)}`);
      console.log(`    ${g.description}`);
    }
    console.log();
  }

  if (category === "verification" || category === "all") {
    console.log("✅ VERIFICATION TEMPLATES");
    console.log("─".repeat(40));
    for (const v of components.verificationTemplates) {
      console.log(`  ${formatName(v.name)}`);
    }
    console.log();
  }
}

// Helpers
function formatName(name: string): string {
  return name
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function groupByCategory(overlays: Component[]): Record<string, Component[]> {
  const groups: Record<string, Component[]> = {};
  for (const overlay of overlays) {
    const category = overlay.category || "General";
    if (!groups[category]) groups[category] = [];
    groups[category].push(overlay);
  }
  return groups;
}

function checkConflicts(overlays: Component[]): string[] {
  const conflicts: string[] = [];
  const selectedNames = overlays.map(o => o.name);

  for (const overlay of overlays) {
    if (overlay.conflicts) {
      for (const conflict of overlay.conflicts) {
        if (selectedNames.includes(conflict)) {
          conflicts.push(`${overlay.name} conflicts with ${conflict}`);
        }
      }
    }
  }

  return [...new Set(conflicts)];
}

main().catch(console.error);
