#!/usr/bin/env bun

import { readdir, readFile } from "fs/promises";
import { join, basename } from "path";
import { existsSync } from "fs";

const ROOT_DIR = join(import.meta.dir, "..");
let errors = 0;
let warnings = 0;

function error(msg: string) {
  console.error(`  ❌ ${msg}`);
  errors++;
}

function warn(msg: string) {
  console.warn(`  ⚠️  ${msg}`);
  warnings++;
}

function ok(msg: string) {
  console.log(`  ✅ ${msg}`);
}

async function getMarkdownFiles(dir: string): Promise<string[]> {
  const files: string[] = [];
  try {
    const entries = await readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = join(dir, entry.name);
      if (entry.isDirectory()) {
        files.push(...await getMarkdownFiles(fullPath));
      } else if (entry.name.endsWith(".md") && entry.name !== "README.md") {
        files.push(fullPath);
      }
    }
  } catch { /* directory doesn't exist */ }
  return files;
}

function extractMetadataField(content: string, field: string): string[] {
  const regex = new RegExp(`\\*\\*${field}:\\*\\*\\s*(.+)`, "i");
  const match = content.match(regex);
  if (!match) return [];
  return match[1].split(",").map(s => s.trim().replace(/`/g, "")).filter(Boolean);
}

async function validateCrossReferences() {
  console.log("\n📋 Cross-Reference Validation");
  console.log("─".repeat(40));

  const allOverlays = await getMarkdownFiles(join(ROOT_DIR, "overlays"));
  const allFoundations = await getMarkdownFiles(join(ROOT_DIR, "foundations", "roles"));
  const allGoals = await getMarkdownFiles(join(ROOT_DIR, "goals"));
  const allProfiles = await getMarkdownFiles(join(ROOT_DIR, "profiles"));

  const overlayNames = new Set(allOverlays.map(f => basename(f, ".md")));
  const foundationNames = new Set(allFoundations.map(f => basename(f, ".md")));
  const goalNames = new Set(allGoals.map(f => basename(f, ".md")));

  const allComponentNames = new Set([...overlayNames, ...foundationNames, ...goalNames]);

  for (const file of [...allOverlays, ...allFoundations, ...allGoals]) {
    const content = await readFile(file, "utf-8");
    const name = basename(file, ".md");
    const relPath = file.replace(ROOT_DIR + "/", "");

    const pairsWith = extractMetadataField(content, "Pairs with");
    const combinesWith = extractMetadataField(content, "Combines with");
    const conflictsWith = extractMetadataField(content, "Conflicts with");

    const genericPhrases = ["none", "any overlay", "any role", "any execution style", "any foundation"];
    for (const ref of [...pairsWith, ...combinesWith]) {
      if (genericPhrases.some(p => ref.toLowerCase().includes(p))) continue;
      if (ref.toLowerCase().includes("overlays") || ref.toLowerCase().includes("roles")) continue;
      if (!allComponentNames.has(ref)) {
        error(`${relPath}: references "${ref}" which doesn't exist`);
      }
    }

    for (const ref of conflictsWith) {
      if (ref === "None") continue;
      if (!allComponentNames.has(ref)) {
        error(`${relPath}: conflict reference "${ref}" doesn't exist`);
      }
    }
  }

  for (const file of allProfiles) {
    const content = await readFile(file, "utf-8");
    const relPath = file.replace(ROOT_DIR + "/", "");

    const fileRefs = content.match(/`(?:foundations|overlays|goals)\/[^`]+\.md`/g) || [];
    for (const ref of fileRefs) {
      const cleanRef = ref.replace(/`/g, "");
      const fullPath = join(ROOT_DIR, cleanRef);
      if (!existsSync(fullPath)) {
        error(`${relPath}: references "${cleanRef}" which doesn't exist`);
      }
    }
  }

  ok("Cross-reference scan complete");
}

async function validateConflictSymmetry() {
  console.log("\n🔄 Conflict Symmetry Validation");
  console.log("─".repeat(40));

  const allOverlays = await getMarkdownFiles(join(ROOT_DIR, "overlays"));
  const conflictMap = new Map<string, string[]>();

  for (const file of allOverlays) {
    const content = await readFile(file, "utf-8");
    const name = basename(file, ".md");
    const conflicts = extractMetadataField(content, "Conflicts with")
      .filter(c => c !== "None");
    conflictMap.set(name, conflicts);
  }

  for (const [name, conflicts] of conflictMap) {
    for (const conflict of conflicts) {
      const reverseConflicts = conflictMap.get(conflict) || [];
      if (!reverseConflicts.includes(name)) {
        warn(`${name} conflicts with ${conflict}, but ${conflict} doesn't list ${name} as a conflict`);
      }
    }
  }

  ok("Conflict symmetry scan complete");
}

async function validateRecommendations() {
  console.log("\n🎯 Recommendation Engine Validation");
  console.log("─".repeat(40));

  const recFile = join(ROOT_DIR, "cli", "utils", "recommendations.ts");
  const content = await readFile(recFile, "utf-8");

  const allOverlays = await getMarkdownFiles(join(ROOT_DIR, "overlays"));
  const overlayNames = new Set(allOverlays.map(f => basename(f, ".md")));

  const componentRefs = content.match(/componentName:\s*"([^"]+)"/g) || [];
  for (const ref of componentRefs) {
    const name = ref.match(/"([^"]+)"/)?.[1];
    if (name && !overlayNames.has(name)) {
      error(`recommendations.ts: references component "${name}" which doesn't exist as an overlay`);
    }
  }

  const goalRefs = content.match(/ctx\.goal\?\.name\s*===\s*"([^"]+)"/g) || [];
  const allGoals = await getMarkdownFiles(join(ROOT_DIR, "goals"));
  const goalNames = new Set(allGoals.map(f => basename(f, ".md")));

  for (const ref of goalRefs) {
    const name = ref.match(/"([^"]+)"/)?.[1];
    if (name && !goalNames.has(name)) {
      error(`recommendations.ts: references goal "${name}" which doesn't exist`);
    }
  }

  ok("Recommendation engine scan complete");
}

async function validateTokenBudget() {
  console.log("\n📊 Token Budget Validation");
  console.log("─".repeat(40));

  const allFiles = [
    ...await getMarkdownFiles(join(ROOT_DIR, "foundations")),
    ...await getMarkdownFiles(join(ROOT_DIR, "foundations", "roles")),
    ...await getMarkdownFiles(join(ROOT_DIR, "overlays")),
    ...await getMarkdownFiles(join(ROOT_DIR, "goals")),
  ];

  for (const file of allFiles) {
    const content = await readFile(file, "utf-8");
    const relPath = file.replace(ROOT_DIR + "/", "");
    const wordCount = content.split(/\s+/).length;
    const estimatedTokens = Math.ceil(wordCount * 1.3);

    if (estimatedTokens > 1500) {
      warn(`${relPath}: ~${estimatedTokens} tokens (>${1500} budget for individual components)`);
    }
  }

  ok("Token budget scan complete");
}

async function main() {
  console.log("🔍 FORGE Framework Validation");
  console.log("═".repeat(40));

  await validateCrossReferences();
  await validateConflictSymmetry();
  await validateRecommendations();
  await validateTokenBudget();

  console.log("\n" + "═".repeat(40));
  if (errors > 0) {
    console.log(`\n💥 ${errors} error(s), ${warnings} warning(s)`);
    process.exit(1);
  } else if (warnings > 0) {
    console.log(`\n⚠️  ${warnings} warning(s), 0 errors`);
  } else {
    console.log(`\n✅ All validations passed!`);
  }
}

main().catch(console.error);
