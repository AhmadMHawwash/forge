# GOALS

Structured workflows for common development scenarios. Each goal provides a two-phase approach: **Planning → Execution**.

## Available Goals

| Goal | Purpose | Phases |
|------|---------|--------|
| [full-cycle](full-cycle.md) | Complete SDLC from requirements to commit | 9 gated phases |
| [specification](specification.md) | Turn vague ideas into clear specs | Discovery → Specification |
| [feature-request](feature-request.md) | Build features systematically | Plan → Build → Verify |
| [bug-investigation](bug-investigation.md) | Find and fix root causes | Investigate → Fix → Verify |
| [find-online](find-online.md) | Research solutions online with project context | Frame → Research → Deliver |
| [code-review](code-review.md) | Thorough, educational reviews | Analyze → Feedback |
| [refactor](refactor.md) | Detect code smells and refactor | Detect → Refactor |
| [tdd](tdd.md) | Test-driven development | Test Design → Red-Green-Refactor |
| [verify](verify.md) | Multi-layer verification before shipping | 6 sequential layers |
| [pre-mortem](pre-mortem.md) | Identify what could go wrong before shipping | Enumerate → Rank → Mitigate |
| [smart-commit](smart-commit.md) | Structured git commit messages | Analyze → Compose → Commit |
| [documentation](documentation.md) | Write documentation and ADRs | Audit → Write |
| [retrospective](retrospective.md) | Learn from completed work | Gather → Analyze → Act |
| [project-init](project-init.md) | Initialize project context for persistent AI sessions | Gather → Generate → Initialize |
| [session-handoff](session-handoff.md) | Pause/resume work across AI sessions | Pause → Capture → Resume |
| [next](next.md) | Progress navigator — find your plan and continue | Scan → Disambiguate → Route |

## Two-Phase Workflow

All goals follow a gate-based approach:

### 📋 Planning Phase

- Understand the problem
- Analyze constraints
- Design the approach
- **Gate:** Review before proceeding

### 🚀 Execution Phase

- Implement the solution
- Verify results
- Document outcomes

## Goal Structure

Each goal includes:

- **ROLE** — Task-specific identity
- **DIRECTIVES** — Workflow constraints
- **THINKING PROCESS** — Step-by-step reasoning
- **OUTPUT FORMAT** — Expected deliverables

## Combining Goals with Overlays

Goals define *what* you're doing. Overlays define *how*:

```
Feature Development + Deliberate Planner + Security Specialist
→ Plan thoroughly, with security as a first-class concern
```
