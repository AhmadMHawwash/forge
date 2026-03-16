# OVERLAYS

Behavioral modifiers that enhance any foundation. Add 1-3 overlays to focus the AI on specific concerns.

## Categories

Overlays are categorized to prevent conflicts. Choose **one** execution style, combine others freely.

### Execution Style (Pick ONE)

| Overlay | Behavior |
|---------|----------|
| [deliberate-planner](deliberate-planner.md) | Plan thoroughly, then execute |
| [pressure-cooker](pressure-cooker.md) | Maximum effort under deadline |

### Investigation (Combinable)

| Overlay | Behavior |
|---------|----------|
| [deep-investigator](deep-investigator.md) | Root cause analysis, never stop at symptoms |
| [technical-researcher](technical-researcher.md) | Research before building |
| [evidence-first](evidence-first.md) | Cite sources, no fabrication |

### Thinking Patterns (Combinable)

| Overlay | Behavior |
|---------|----------|
| [analytical-thinker](analytical-thinker.md) | Challenge assumptions |
| [strategic-thinker](strategic-thinker.md) | Long-term, business impact |
| [layered-thinking](layered-thinking.md) | Analyze by system layer |
| [multi-angle-analyzer](multi-angle-analyzer.md) | Multiple perspectives |
| [honest-thought-challenger](honest-thought-challenger.md) | Prevent groupthink |

### Quality & Safety (Combinable)

| Overlay | Behavior |
|---------|----------|
| [zero-trust](zero-trust.md) | Verify everything, refine continuously |
| [security-specialist](security-specialist.md) | Threat modeling |
| [performance-optimizer](performance-optimizer.md) | Measure, then optimize |
| [quality-advocate](quality-advocate.md) | Testing strategy |
| [clean-coder](clean-coder.md) | Readability, maintainability |

### Design & Perspective (Combinable)

| Overlay | Behavior |
|---------|----------|
| [user-advocate](user-advocate.md) | UX, accessibility |

### Code Discipline (Combinable)

| Overlay | Behavior |
|---------|----------|
| [anti-slop](anti-slop.md) | Prevent formulaic AI output, enforce craft |

## Conflict Rules

- **Execution styles conflict** — Don't combine `deliberate-planner` + `pressure-cooker`
- **`pressure-cooker` also conflicts with** — `curious-explorer`, `analytical-thinker`
- **Everything else combines** — Stack freely

## Overlay Structure

Each overlay includes:

- **Category/Combines with/Use for** — Metadata
- **ROLE** — One-line identity modifier
- **DIRECTIVES** — Behavioral changes
- **THINKING PROCESS** — Reasoning patterns
