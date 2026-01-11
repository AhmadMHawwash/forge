# FORGE

**F**oundations **O**verlays **R**esources **G**oals **E**ngines

A composable prompt framework for AI-assisted development. FORGE gives you modular building blocks—role foundations, behavioral overlays, and structured goals—that combine into focused AI engineer profiles.

## The FORGE Approach

FORGE occupies a unique space in AI-assisted development:

- **Not a multi-agent system** — No orchestration, no agent handoffs, no YAML workflows
- **Not a spec generator** — You write code, not documents
- **Not a prompt template library** — Components are designed to combine, not copy-paste

**FORGE enhances a single AI assistant with composable behavioral modifications.**

```
Profile = Foundation (Role) + Overlays (Behaviors) + Goals (Workflow)
```

Think of it like character classes in games: start with a base class (Senior Backend Engineer), add traits (Security Specialist + Deep Investigator), and apply to a quest type (Bug Investigation).

## Why Composable Components?

Most AI coding approaches optimize for one thing:

- **Spec-driven tools** excel at requirements → tasks but assume you want planning overhead
- **Multi-agent frameworks** excel at complex workflows but require orchestration setup
- **Prompt libraries** offer templates but don't compose—you get conflicts and bloat

**FORGE optimizes for flexibility:**

- Grab the behaviors you need for *this* task
- Skip what you don't need
- Stay under 4K tokens
- No setup, no dependencies, instant profile

## Quick Start

```bash
# Run the interactive CLI
npx forge-framework-cli@latest

# Or run using bun
bunx forge-framework-cli@latest
```

The CLI guides you through:

1. **Select a foundation** — role identity (Backend, Frontend, Architect, etc.)
2. **Add overlays** — behavioral modifiers (1-3 recommended)
3. **Choose a goal** — workflow structure
4. **Copy to clipboard** — paste into any AI tool

## Core Components

### 🧭 Foundations (Who You Are)

Role-based identity that defines expertise and instincts.

| Foundation | Focus |
|------------|-------|
| Principal Architect | System design, boundaries, integration patterns |
| Senior Frontend Engineer | UI/UX, accessibility, client-side performance |
| Senior Backend Engineer | APIs, services, scalability, reliability |
| Senior Database Specialist | Schema design, query optimization, migrations |
| Senior QA Engineer | Test strategy, coverage, quality assurance |
| Senior Product Manager | Requirements clarity, feasibility, specifications |

### ⚡ Overlays (How You Work)

Behavioral modifiers that stack on any foundation. Categorized to prevent conflicts.

**Execution Style** (pick ONE):

| Overlay | Behavior |
|---------|----------|

| `deliberate-planner` | Plan thoroughly, then execute |
| `zero-trust` | Verify everything, continuous refinement |
| `pressure-cooker` | Maximum effort under deadline pressure |

**Investigation** (combinable):

| Overlay | Behavior |
|---------|----------|
| `deep-investigator` | Find root causes, never settle for symptoms |
| `technical-researcher` | Research best practices before building |
| `evidence-first` | Cite sources, no fabrication |

**Thinking Patterns** (combinable):

| Overlay | Behavior |
|---------|----------|
| `analytical-thinker` | Challenge assumptions, consider alternatives |
| `strategic-thinker` | Long-term impact, business outcomes |
| `layered-thinking` | Analyze by system layers |
| `multi-angle-analyzer` | Multiple perspectives, find blind spots |
| `honest-thought-challenger` | Prevent groupthink, stress-test plans |
| `curious-explorer` | First-principles, challenge status quo |

**Quality & Safety** (combinable):

| Overlay | Behavior |
|---------|----------|
| `security-specialist` | Threat modeling, security by design |
| `performance-optimizer` | Measure first, optimize what matters |
| `quality-advocate` | Testing strategy, edge case handling |
| `clean-coder` | Readability, maintainability |
| `production-readiness` | Observability, resilience, ops concerns |

**Design & Perspective** (combinable):

| Overlay | Behavior |
|---------|----------|
| `system-designer` | Component boundaries, contracts |
| `user-advocate` | User experience, accessibility |

**Communication**:

| Overlay | Behavior |
|---------|----------|
| `concise-communicator` | Brief, scannable output |

### 🎯 Goals (What You're Doing)

Structured workflows with two-phase approach: **Planning → Execution**.

| Goal | Workflow |
|------|----------|
| `specification` | Turn vague ideas into clear, testable specs |
| `feature-request` | Build features systematically with risk awareness |
| `bug-investigation` | Find root causes, fix with regression protection |
| `code-review` | Thorough, prioritized, educational feedback |
| `retrospective` | Learn from completed work, actionable improvements |

### ✅ Verification Templates

Checklists to validate work. Prove, don't claim.

- Feature verification
- Bug fix verification
- Code review verification
- Specification verification

## Example Profiles

**🐛 Security Bug Hunt**

```
Senior Backend Engineer + Zero Trust + Security Specialist + Deep Investigator + Bug Investigation
```

*AI verifies every assumption, thinks like an attacker, digs to root cause*

**🏗️ Architecture Decision**

```
Architect + Deliberate Planner + Strategic Thinker + System Designer + Code Review
```

*AI evaluates long-term impact, documents tradeoffs, defines boundaries*

**📋 Requirements Clarity**

```
Product Manager + Analytical Thinker + Multi-Angle Analyzer + Specification
```

*AI asks the right questions, considers all stakeholders, produces testable specs*

## Token-Efficient Design

FORGE prompts are optimized for LLM context windows:

- **~2-4K tokens per profile** — leaves room for your code
- **Imperative directives** — no verbose explanations
- **Structured headers** — consistent format (`## ROLE`, `## DIRECTIVES`, `## THINKING PROCESS`)
- **Cognitive triggers** — activate specific reasoning patterns

Each component includes:

- **Metadata headers** — `Triggers`, `Pairs with`, `Use for` for routing
- Clear behavioral guidelines
- Decision-making frameworks  
- Output format templates
- Quality gates

## Prompt Engineering Foundation

FORGE components use proven patterns:

- **Chain-of-Thought** — Step-by-step reasoning in THINKING PROCESS sections
- **ReAct Framework** — Reason → Act → Observe → Reflect loops
- **Reflexion** — Self-critique triggers in overlays like `zero-trust`
- **Least-to-Most** — Scale-adaptive planning based on complexity
- **Two-Phase Workflow** — Planning → Execution with phase gates

## CLI Features

```bash
npx forge-framework-cli@latest
```

- 🆕 **Create profiles** — Interactive component selection
- 💾 **Save profiles** — Store custom combinations for reuse
- 📋 **Copy to clipboard** — Paste into Cursor, Claude, ChatGPT, etc.
- ⚠️ **Conflict detection** — Warns about incompatible overlays
- 📁 **Categorized overlays** — Easy to find the right modifier

## Installation Options

**No installation (recommended):**

```bash
npx forge-framework-cli@latest
```

**Global installation:**

```bash
npm install -g forge-framework-cli
forge
```

**Local development:**

```bash
git clone https://github.com/your-org/forge-framework
cd forge-framework
bun install
bun run forge
```

## Directory Structure

```
forge-framework/
├── foundations/          # Role identities
│   └── roles/            # Backend, Frontend, Architect, etc.
├── overlays/             # Behavioral modifiers (categorized)
├── goals/                # Workflow structures
├── verification-templates/  # Completion checklists
├── resources/            # Domain & stack context
├── engines/              # Profile router for automatic selection
└── recipes/              # Pre-built profile combinations
```

## Contributing

FORGE improves through real-world usage:

- **Share combinations** — What works for your use cases?
- **Suggest overlays** — Notice a behavioral gap?
- **Add resources** — Know a domain or stack deeply?
- **Improve prompts** — Found better wording?

---

**Compose your AI engineer. Ship better code.**

```bash
npx forge-framework-cli@latest
```
