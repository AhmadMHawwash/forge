
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
            { componentName: "bug-verification", score: 100, reason: "Standard template for bug verification" }
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
        if (ctx.goal?.name === "feature-development") {
          return [
            { componentName: "production-readiness", score: 85, reason: "Critical for shipping new features" },
            { componentName: "quality-advocate", score: 80, reason: "Ensures no regressions" },
            { componentName: "user-advocate", score: 75, reason: "Keeps user needs in focus" },
            { componentName: "feature-verification", score: 100, reason: "Standard template for feature acceptance" }
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
            { componentName: "system-designer", score: 80, reason: "Aligns with backend architecture needs" },
            { componentName: "production-readiness", score: 75, reason: "Operational reliability" },
            { componentName: "security-specialist", score: 70, reason: "Data protection defaults" }
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
        if (ctx.role?.name === "architect" && ctx.goal?.name === "feature-development") {
          return [
            { componentName: "system-designer", score: 95, reason: "Core architectural definition" },
            { componentName: "strategic-thinker", score: 85, reason: "Long-term alignment" },
            { componentName: "specification-verification", score: 90, reason: "Contract validation" }
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
