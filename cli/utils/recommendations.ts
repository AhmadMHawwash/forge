
import type { Component, Components } from "./components";

/**
 * Context for making recommendations
 * Represents the state of user selections at a specific point in the wizard
 */
export interface SelectionContext {
  goal?: Component;
  role?: Component;
  resources: Component[];
}

/**
 * A recommendation result for a specific component
 */
export interface Recommendation {
  componentName: string;
  score: number; // 0-100, higher is better
  reason: string;
}

/**
 * A rule that inspects the context and produces recommendations
 */
interface RecommendationRule {
  id: string;
  name: string;
  description: string;

  /**
   * Evaluate the rule against the current context.
   * Returns a list of recommendations if the rule applies, or null/empty if not.
   */
  evaluate: (context: SelectionContext) => Recommendation[];
}

/**
 * The Engine that manages rules and aggregates recommendations
 */
export class RecommendationEngine {
  private rules: RecommendationRule[] = [];

  constructor() {
    this.registerDefaultRules();
  }

  private registerDefaultRules() {
    // Rule: Bug Investigation Priorities
    this.rules.push({
      id: "goal-bug-investigation",
      name: "Bug Investigation Protocol",
      description: "Suggests investigative tools when doing bug fixes",
      evaluate: (ctx) => {
        if (ctx.goal?.name === "bug-investigation") {
          return [
            { componentName: "deep-investigator", score: 90, reason: "Crucial for root cause analysis" },
            { componentName: "evidence-first", score: 85, reason: "Ensures scientific method in debugging" },
            { componentName: "zero-trust", score: 80, reason: "Validates fixes rigorously" },
          ];
        }
        return [];
      }
    });

    // Rule: Feature Development Standards
    this.rules.push({
      id: "goal-feature-dev",
      name: "Feature Development Standards",
      description: "Suggests architecture and quality tools for new features",
      evaluate: (ctx) => {
        if (ctx.goal?.name === "feature-request") {
          return [
            { componentName: "production-readiness", score: 85, reason: "Critical for shipping new features" },
            { componentName: "quality-advocate", score: 80, reason: "Ensures no regressions" },
            { componentName: "user-advocate", score: 75, reason: "Keeps user needs in focus" },
            { componentName: "anti-slop", score: 70, reason: "Prevents formulaic AI output in new code" },
          ];
        }
        return [];
      }
    });

    // Rule: Backend Development Context
    this.rules.push({
      id: "role-backend",
      name: "Backend Excellence",
      description: "Tools for backend reliability and scale",
      evaluate: (ctx) => {
        if (ctx.role?.name.includes("backend") || ctx.role?.name.includes("architect")) {
          return [
            { componentName: "production-readiness", score: 80, reason: "Operational reliability for backend systems" },
            { componentName: "security-specialist", score: 75, reason: "Data protection defaults" },
            { componentName: "anti-slop", score: 65, reason: "Clean, professional backend code" },
          ];
        }
        return [];
      }
    });

    // Rule: Frontend Development Context
    this.rules.push({
      id: "role-frontend",
      name: "Frontend Excellence",
      description: "Tools for UX and performance",
      evaluate: (ctx) => {
        if (ctx.role?.name.includes("frontend") || ctx.role?.name.includes("web")) {
          return [
            { componentName: "user-advocate", score: 90, reason: "Primary frontend concern" },
            { componentName: "performance-optimizer", score: 85, reason: "Critical for web vitals" },
            { componentName: "quality-advocate", score: 70, reason: "Cross-browser testing" }
          ];
        }
        return [];
      }
    });

    // Rule: Complex System Design (Architect + Feature)
    this.rules.push({
      id: "architect-flow",
      name: "Architectural Planning",
      description: "High-level design combinations",
      evaluate: (ctx) => {
        if (ctx.role?.name === "architect" && ctx.goal?.name === "feature-request") {
          return [
            { componentName: "strategic-thinker", score: 90, reason: "Long-term alignment for architecture" },
            { componentName: "layered-thinking", score: 85, reason: "Analyze impact across system layers" },
            { componentName: "deliberate-planner", score: 80, reason: "Measure twice, cut once for architecture" },
          ];
        }
        return [];
      }
    });

    // Rule: Project Init Context
    this.rules.push({
      id: "goal-project-init",
      name: "Project Initialization",
      description: "Suggests overlays for setting up project context",
      evaluate: (ctx) => {
        if (ctx.goal?.name === "project-init") {
          return [
            { componentName: "deep-investigator", score: 90, reason: "Thorough codebase analysis for brownfield projects" },
            { componentName: "evidence-first", score: 85, reason: "Evidence-backed context documentation" },
            { componentName: "strategic-thinker", score: 75, reason: "Long-term project planning" },
          ];
        }
        return [];
      }
    });

    // Rule: Session Handoff Context
    this.rules.push({
      id: "goal-session-handoff",
      name: "Session Handoff Protocol",
      description: "Suggests overlays for preserving session context",
      evaluate: (ctx) => {
        if (ctx.goal?.name === "session-handoff") {
          return [
            { componentName: "evidence-first", score: 90, reason: "State documentation must be factual" },
            { componentName: "deliberate-planner", score: 80, reason: "Structured context capture" },
          ];
        }
        return [];
      }
    });

    // Rule: Full Cycle State Management
    this.rules.push({
      id: "goal-full-cycle",
      name: "Full Cycle Development",
      description: "Suggests overlays for end-to-end development cycles",
      evaluate: (ctx) => {
        if (ctx.goal?.name === "full-cycle") {
          return [
            { componentName: "deliberate-planner", score: 90, reason: "Sequential gated phases require planning discipline" },
            { componentName: "quality-advocate", score: 85, reason: "Multi-phase quality gates" },
            { componentName: "strategic-thinker", score: 80, reason: "End-to-end alignment with project goals" },
          ];
        }
        return [];
      }
    });

    // Rule: Progress Navigator (Next)
    this.rules.push({
      id: "goal-next",
      name: "Progress Navigator",
      description: "Suggests overlays for plan scanning and routing",
      evaluate: (ctx) => {
        if (ctx.goal?.name === "next") {
          return [
            { componentName: "evidence-first", score: 85, reason: "State and progress must be factual" },
            { componentName: "deliberate-planner", score: 75, reason: "Structured plan scanning and routing" },
          ];
        }
        return [];
      }
    });

    // Rule: Resource-Specific Suggestions
    this.rules.push({
      id: "resource-stack",
      name: "Stack Specifics",
      description: "Recommendations based on technical stack",
      evaluate: (ctx) => {
        const recs: Recommendation[] = [];
        const resourceNames = ctx.resources.map(r => r.name.toLowerCase());

        if (resourceNames.some(r => r.includes("react") || r.includes("vue") || r.includes("next"))) {
          recs.push({ componentName: "performance-optimizer", score: 60, reason: "Client-side performance" });
        }

        if (resourceNames.some(r => r.includes("sql") || r.includes("database"))) {
          recs.push({ componentName: "production-readiness", score: 60, reason: "Database reliability" });
        }

        return recs;
      }
    });
  }

  /**
   * Process the context and return a map of recommendations
   */
  public getRecommendations(context: SelectionContext): Map<string, Recommendation> {
    const results = new Map<string, Recommendation>();

    for (const rule of this.rules) {
      const recs = rule.evaluate(context);

      for (const rec of recs) {
        // If we already have a recommendation for this component, 
        // keep the one with the higher score, or merge reasons?
        // For now, simple Max Score wins.
        const existing = results.get(rec.componentName);
        if (!existing || rec.score > existing.score) {
          results.set(rec.componentName, rec);
        }
      }
    }

    return results;
  }
}

// Singleton instance for ease of use
export const recommender = new RecommendationEngine();
