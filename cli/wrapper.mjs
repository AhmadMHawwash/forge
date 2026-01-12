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

// Spawn bun with the forge script, explicitly using our own tsconfig
// to avoid issues with the user's local tsconfig (e.g. comments, trailing commas, or strict parsing)
const child = spawn("bun", ["--tsconfig", tsconfigPath, forgeScript], {
  stdio: ["inherit", "inherit", "pipe"],
  env: { ...process.env },
});

child.stderr.on("data", (data) => {
  const output = data.toString();
  // Filter out tsconfig path warnings
  const lines = output.split("\n").filter((line) => {
    return !line.includes("Non-relative path") &&
      !line.includes('did you forget a leading "./"') &&
      !line.includes("is not allowed when");
  });
  const filtered = lines.join("\n");
  if (filtered.trim()) {
    process.stderr.write(filtered);
  }
});

child.on("exit", (code) => {
  process.exit(code || 0);
});
