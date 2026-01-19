#!/usr/bin/env node

/**
 * FORGE CLI Wrapper
 * This wrapper uses Node.js to spawn Bun without tsconfig warnings
 * from the user's project appearing.
 */

import { spawn } from "child_process";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const forgeScript = join(__dirname, "..", "dist", "forge.js");
const tsconfigPath = join(__dirname, "..", "tsconfig.json");

import { existsSync } from "fs";

if (!existsSync(forgeScript)) {
  console.error("Error: dist/forge.js not found at:", forgeScript);
  process.exit(1);
}

// Spawn bun with the forge script, explicitly using our own tsconfig
// to avoid issues with the user's local tsconfig (e.g. comments, trailing commas, or strict parsing)
const child = spawn("bun", ["--tsconfig", tsconfigPath, forgeScript], {
  stdio: "inherit",
  env: { ...process.env },
});

child.on("error", (err) => {
  if (err.code === "ENOENT") {
    console.error("\x1b[31mError: Bun is required but not installed.\x1b[0m");
    console.error("\nInstall Bun with:");
    console.error("  curl -fsSL https://bun.sh/install | bash");
    console.error("\nOr visit: https://bun.sh/docs/installation");
  } else {
    console.error("Failed to start FORGE:", err.message);
  }
  process.exit(1);
});

child.on("exit", (code) => {
  process.exit(code || 0);
});
