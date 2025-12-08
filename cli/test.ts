#!/usr/bin/env bun

import { discoverComponents } from './utils/components.ts';

async function test() {
  console.log("Testing FORGE component discovery...\n");

  const c = await discoverComponents();

  console.log("📦 Components Found:");
  console.log(`  🧭 Foundations: ${c.foundations.length}`);
  console.log(`  ⚡ Overlays: ${c.overlays.length}`);
  console.log(`  🎯 Goals: ${c.goals.length}`);
  console.log(`  ✅ Verification Templates: ${c.verificationTemplates.length}`);

  console.log("\n📋 Sample Components:");
  if (c.foundations[0]) {
    console.log(`  Foundation: ${c.foundations[0].name} - ${c.foundations[0].description.slice(0, 50)}...`);
  }
  if (c.overlays[0]) {
    console.log(`  Overlay: ${c.overlays[0].name} (${c.overlays[0].category || 'General'})`);
  }
  if (c.goals[0]) {
    console.log(`  Goal: ${c.goals[0].name}`);
  }

  console.log("\n✅ Component discovery working!");
}

test().catch(console.error);
