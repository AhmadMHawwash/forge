#!/usr/bin/env bun

/**
 * FORGE CLI - Interactive Profile Builder
 * 
 * Usage:
 *   bun run forge            # Interactive mode
 *   bun run forge --help     # Show help
 */

import * as p from "@clack/prompts";
import { writeFile, mkdir, readFile } from "fs/promises";
import { join, dirname } from "path";
import { existsSync } from "fs";
import { discoverComponents, composeProfile, type Component } from "./utils/components";

const SAVED_PROFILES_DIR = join(import.meta.dir, "..", ".forge", "creations");

interface SavedProfile {
  name: string;
  createdAt: string;
  foundation?: string;
  overlays: string[];
  goal?: string;
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

async function main() {
  console.clear();

  p.intro("🔥 FORGE - Interactive Profile Builder");

  const components = await discoverComponents();
  const savedProfiles = await loadSavedProfiles();

  // Main menu
  const action = await p.select({
    message: "What would you like to do?",
    options: [
      { value: "create", label: "🆕 Create a new profile", hint: "Build a custom AI developer profile" },
      { value: "saved", label: "📂 View saved profiles", hint: `${savedProfiles.length} profiles saved` },
      { value: "list", label: "📋 List available components", hint: "See all foundations, overlays, and goals" },
    ],
  });

  if (p.isCancel(action)) {
    p.cancel("Goodbye!");
    process.exit(0);
  }

  switch (action) {
    case "create":
      await createProfile(components, savedProfiles);
      break;
    case "saved":
      await viewSavedProfiles(savedProfiles, components);
      break;
    case "list":
      await listComponents(components);
      break;
  }

  p.outro("Thanks for using FORGE! 🔥");
}

async function createProfile(components: Awaited<ReturnType<typeof discoverComponents>>, savedProfiles: SavedProfile[]) {
  // Step 1: Select Foundation (Role)
  const foundation = await p.select({
    message: "Select a foundation role:",
    options: components.foundations.map(f => ({
      value: f,
      label: formatName(f.name),
      hint: f.description.slice(0, 60),
    })),
  });

  if (p.isCancel(foundation)) return;

  // Step 2: Select Overlays (multi-select)
  // Sort overlays by category priority
  const categoryPriority: Record<string, number> = {
    "Execution Style": 1,
    "Thinking Pattern": 2,
    "Quality & Safety": 3,
    "Investigation": 4,
    "Design & Perspective": 5,
    "Communication": 6,
    "Experimental": 99
  };

  const sortedOverlays = [...components.overlays].sort((a, b) => {
    const catA = a.category || "General";
    const catB = b.category || "General";

    // Compare categories based on priority
    const priorityA = categoryPriority[catA] || 50;
    const priorityB = categoryPriority[catB] || 50;

    if (priorityA !== priorityB) return priorityA - priorityB;

    // If same category, sort by category name (for non-prioritized ones)
    if (catA !== catB) return catA.localeCompare(catB);

    // If same category, sort by name
    return a.name.localeCompare(b.name);
  });

  const overlayOptions = sortedOverlays.map(o => ({
    value: o,
    label: `${o.category ? `[${o.category}]` : "[General]"} ${formatName(o.name)}`,
    hint: o.conflicts ? `⚠️ Conflicts: ${o.conflicts.join(", ")}` : undefined,
  }));

  const selectedOverlays = await p.multiselect({
    message: "Select overlays (space to toggle, enter to confirm):",
    options: overlayOptions,
    required: false,
  });

  if (p.isCancel(selectedOverlays)) return;

  const overlays = selectedOverlays as Component[];

  // Check for conflicts
  const conflicts = checkConflicts(overlays);
  if (conflicts.length > 0) {
    p.log.warning(`⚠️ Potential conflicts detected: ${conflicts.join(", ")}`);
    const proceed = await p.confirm({
      message: "Continue anyway?",
      initialValue: false,
    });
    if (p.isCancel(proceed) || !proceed) return;
  }

  // Step 3: Select Goal
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

  // Step 4: Select Verification Template (optional)
  const verification = await p.select({
    message: "Include a verification template?",
    options: [
      { value: null, label: "⏭️ Skip", hint: "No verification template" },
      ...components.verificationTemplates.map(v => ({
        value: v,
        label: formatName(v.name),
        hint: v.description.slice(0, 60),
      })),
    ],
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
  });

  s.stop("Profile composed!");

  // Step 5: Save options
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
