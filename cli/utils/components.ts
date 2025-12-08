/**
 * FORGE Component Discovery
 * Scans the framework directories to discover available components
 */

import { readdir, readFile } from "fs/promises";
import { join, basename } from "path";

export interface Component {
  name: string;
  path: string;
  description: string;
  category?: string;
  conflicts?: string[];
}

export interface Components {
  foundations: Component[];
  overlays: Component[];
  goals: Component[];
  verificationTemplates: Component[];
  resources: Component[];
}

const ROOT_DIR = join(import.meta.dir, "..", "..");

/**
 * Extract metadata from a markdown file's front matter or first lines
 */
async function extractMetadata(filePath: string): Promise<{ description: string; category?: string; conflicts?: string[] }> {
  try {
    const content = await readFile(filePath, "utf-8");
    const lines = content.split("\n");

    let description = "";
    let category: string | undefined;
    let conflicts: string[] | undefined;

    // Look for description in first few lines
    for (let i = 0; i < Math.min(lines.length, 10); i++) {
      const line = lines[i].trim();

      // Skip headers and empty lines for description
      if (line.startsWith("# ")) {
        // Use header as description if nothing else found
        description = line.replace("# ", "");
        continue;
      }

      // Look for **Category:** pattern
      if (line.startsWith("**Category:**")) {
        category = line.replace("**Category:**", "").trim();
      }

      // Look for **Conflicts with:** pattern
      if (line.startsWith("**Conflicts with:**")) {
        const conflictStr = line.replace("**Conflicts with:**", "").trim();
        conflicts = conflictStr.split(",").map(c => c.trim().replace(/`/g, ""));
      }

      // First non-header, non-empty line as description
      if (!line.startsWith("#") && !line.startsWith("**") && line.length > 20 && !description) {
        description = line.slice(0, 100) + (line.length > 100 ? "..." : "");
      }
    }

    return { description, category, conflicts };
  } catch {
    return { description: "" };
  }
}

/**
 * Scan a directory for markdown files
 */
async function scanDirectory(dirPath: string, subDir?: string): Promise<Component[]> {
  const components: Component[] = [];
  const targetDir = subDir ? join(dirPath, subDir) : dirPath;

  try {
    const entries = await readdir(targetDir, { withFileTypes: true });

    for (const entry of entries) {
      if (entry.isFile() && entry.name.endsWith(".md") && entry.name !== "README.md") {
        const filePath = join(targetDir, entry.name);
        const metadata = await extractMetadata(filePath);

        components.push({
          name: basename(entry.name, ".md"),
          path: filePath,
          description: metadata.description,
          category: metadata.category,
          conflicts: metadata.conflicts,
        });
      }
    }
  } catch (error) {
    // Directory might not exist
    console.error(`Could not scan directory: ${targetDir}`);
  }

  return components;
}

/**
 * Discover all available FORGE components
 */
export async function discoverComponents(): Promise<Components> {
  const [foundations, overlays, goals, verificationTemplates, stacks, domains] = await Promise.all([
    scanDirectory(join(ROOT_DIR, "foundations"), "roles"),
    scanDirectory(join(ROOT_DIR, "overlays")),
    scanDirectory(join(ROOT_DIR, "goals")),
    scanDirectory(join(ROOT_DIR, "verification-templates")),
    scanDirectory(join(ROOT_DIR, "resources"), "stacks"),
    scanDirectory(join(ROOT_DIR, "resources"), "domains"),
  ]);

  return {
    foundations,
    overlays,
    goals,
    verificationTemplates,
    resources: [...stacks, ...domains],
  };
}

/**
 * Read the content of a component file
 */
export async function readComponent(path: string): Promise<string> {
  return readFile(path, "utf-8");
}

/**
 * Compose multiple components into a single profile
 */
export async function composeProfile(components: {
  foundation?: Component;
  overlays: Component[];
  goal?: Component;
  verificationTemplate?: Component;
  resources?: Component[];
}): Promise<string> {
  const parts: string[] = [];

  // Add header
  parts.push("# FORGE Profile\n");
  parts.push(`Generated: ${new Date().toISOString()}\n`);
  parts.push("---\n");

  // Add core doctrine first
  try {
    const coreDoctrine = await readFile(join(ROOT_DIR, "foundations", "core-doctrine.md"), "utf-8");
    parts.push(coreDoctrine);
    parts.push("\n---\n");
  } catch {
    // Core doctrine might not exist
  }

  // Add foundation (role)
  if (components.foundation) {
    const content = await readComponent(components.foundation.path);
    parts.push(`\n## ROLE: ${components.foundation.name.toUpperCase()}\n`);
    parts.push(content);
    parts.push("\n---\n");
  }

  // Add overlays
  for (const overlay of components.overlays) {
    const content = await readComponent(overlay.path);
    parts.push(`\n## OVERLAY: ${overlay.name.toUpperCase()}\n`);
    parts.push(content);
    parts.push("\n---\n");
  }

  // Add goal
  if (components.goal) {
    const content = await readComponent(components.goal.path);
    parts.push(`\n## GOAL: ${components.goal.name.toUpperCase()}\n`);
    parts.push(content);
    parts.push("\n---\n");
  }

  // Add verification template
  if (components.verificationTemplate) {
    const content = await readComponent(components.verificationTemplate.path);
    parts.push(`\n## VERIFICATION: ${components.verificationTemplate.name.toUpperCase()}\n`);
    parts.push(content);
  }

  // Add resources
  if (components.resources && components.resources.length > 0) {
    for (const resource of components.resources) {
      const content = await readComponent(resource.path);
      parts.push(`\n## RESOURCE: ${resource.name.toUpperCase()}\n`);
      parts.push(content);
      parts.push("\n---\n");
    }
  }

  return parts.join("\n");
}
