# FORGE

**F**oundations **O**verlays **R**esources **G**oals **E**ngines

A modular prompt framework that helps developers build better AI coding contexts. Stop writing prompts from scratch—compose proven, reusable components that give AI the right mindset for any development task.

## 🎯 The Problem

When working with AI coding assistants, developers face consistent challenges:

- **Forgetting context**: "Make it accessible" or "consider performance" slip your mind
- **Inconsistent quality**: AI output varies wildly between similar tasks
- **Prompt fatigue**: Writing detailed prompts every time is exhausting
- **Knowledge gaps**: Not knowing what makes a good prompt in the first place

## 💡 The Solution

FORGE provides **prompt components** that combine into specialized AI developer profiles:

**Profile = Foundation (Role) + Overlays (Behaviors) + Resources (Domain) + Goals (Context)**

```
Examples:
Senior Frontend Developer + User Advocate + Performance Optimizer + Feature Development
→ AI that builds production-ready UIs with focus on UX, performance, and maintainability

Senior Backend Developer + Security Specialist + Deep Investigator + Bug Investigation
→ AI that implements secure, scalable services and investigates issues deeply

Principal Architect + System Designer + Strategic Thinker + Code Review
→ AI that evaluates architectural impact, provides clear blueprints, and guides system design
```

## 🏗️ Framework Components

### 🧭 Foundations (Roles)

**Specialized roles for different aspects of software development**

- **Principal Architect** - High-level system design and architectural blueprints, defines boundaries and integration patterns without implementation details
- **Senior Frontend Developer** - Builds scalable, accessible UIs with production-ready code and careful attention to architecture
- **Senior Backend Developer** - Implements reliable, secure backend systems with focus on scalability and operational concerns
- **Senior Database Specialist** - Designs and optimizes schemas, queries, and migrations with emphasis on performance and integrity
- **Senior QA Engineer** - Comprehensive testing strategies combining automation and exploratory testing
- **Senior Product Manager** - Clear requirements with technical understanding and feasibility validation

Architect provides strategic blueprints, while Senior roles focus on implementation excellence.

### ⚡ Overlays (Behavioral Modifiers)

**Behavioral patterns that modify how roles work. Compose 1-3 for focused output.**

#### 🎯 EXECUTION STYLE (Choose ONE)
- **Pragmatic Implementer** - Ship fast, iterate based on feedback
- **Deliberate Planner** - Plan thoroughly, seek approval before execution
- **Zero Trust** - Continuously refine, verify everything

#### 🧠 THINKING & INVESTIGATION (Combinable)
- **Analytical Thinker** - Challenge assumptions, consider alternatives
- **Strategic Thinker** - Connect to business outcomes, long-term thinking
- **Layered Thinking** - Break into system layers for analysis
- **Multi-Angle Analyzer** - Multiple perspectives, find blind spots
- **Deep Investigator** - Pursue root causes, never settle for symptoms
- **Technical Researcher** - Research best practices before building

#### 🛡️ QUALITY & SAFETY (Combinable)
- **Quality Advocate** - Testing strategy, edge case handling
- **Security Specialist** - Threat modeling, security by design
- **Performance Optimizer** - Measure first, optimize what matters
- **Clean Coder** - Readability, maintainability

#### 🏗️ DESIGN & PERSPECTIVE (Combinable)
- **System Designer** - Component boundaries, architectural thinking
- **User Advocate** - User experience, accessibility focus

#### 💬 COMMUNICATION
- **Concise Communicator** - Brief, clear, scannable output

#### 🔥 EXPERIMENTAL 
- **Pressure Cooker** - Emotional framing for maximum effort (EmotionPrompt research - for science!)

**⚠️ Conflicts:** Don't combine Pragmatic Implementer + Deliberate Planner + Zero Trust (contradictory execution styles)

### 🌍 Resources

**Domain and stack-specific knowledge** (extendable)

- **Stacks**: React+Node, Python+Django
- **Domains**: E-commerce patterns and best practices

### 🎯 Goals (Mission Context)

**Structured workflows for common development scenarios using two-phase approach**

- **Specification** - Discovery Phase (Discover → Explore) → Specification Phase (Specify → Validate)
- **Feature Development** - Planning Phase (Understand → Plan) → Execution Phase (Build → Verify)
- **Bug Investigation** - Planning Phase (Understand → Investigate) → Execution Phase (Fix → Verify)
- **Code Review** - Planning Phase (Analysis) → Execution Phase (Feedback → Verify)
- **Retrospective** - Analyze work, learn from successes/failures

**Two-Phase Workflow (BMAD-inspired):**
- **Planning Phase:** Understand requirements, design solution, create plan
- **Execution Phase:** Implement solution, verify results, deliver
- **Phase Gates:** Review/approval checkpoints between phases for complex tasks

### ✅ Verification Templates

**Checklists to validate work completion** (in `verification-templates/`)

- **Feature Verification** - Validate feature implementation is complete
- **Bug Verification** - Validate bug fixes address root cause
- **Review Verification** - Validate code review thoroughness
- **Specification Verification** - Validate spec completeness before implementation

### 🤖 Engines

**Intelligent composition tools** (in `engines/`)

- **Profile Builder** - Meta-prompt that creates custom profiles from your requirements
- **Profile Router** - Analyzes requests and suggests optimal profile combinations

## 🚀 How to Use

**For LLM Context Engineering:**
- **Keep it focused:** Role + 1-3 overlays maximum
- **Avoid conflicts:** Only ONE execution style (Pragmatic/Deliberate/Zero-Trust)
- **Be specific:** Match overlays to actual task requirements
- **Context budget:** ~2-4K tokens per profile is optimal
- **Sequence complex profiles:** For 3 overlays, specify execution flow (see below)

### Method 1: Interactive CLI (Recommended)

**Option A: No Installation (npx/bunx)**
```bash
# Run immediately without installing
bunx forge-framework-cli

# Or if you have Node.js installed
npx forge-framework-cli
```

**Option B: Global Installation**
```bash
# Install globally
bun add -g forge-framework-cli

# Run anytime
forge
```

**Option C: Local Clone**
Use the interactive CLI to build and save profiles:

```bash
# Install dependencies
bun install

# Run locally
bun run forge
```

The CLI lets you:
- 🆕 **Create profiles** — Select foundations, overlays, and goals interactively
- 📂 **Save profiles** — Store and reload your custom profiles anytime
- 📋 **Copy to clipboard** — Load saved profiles by bringing them into conversation context
- ⚠️ **Conflict detection** — Warns about incompatible overlays

### Method 2: Copy Components Manually

1. **Choose your foundation role** based on the work type
2. **Add 1-3 overlays** for specific behaviors you need
3. **Include relevant goal** for workflow structure
4. **Paste into your AI tool's context** (Cursor, Claude, ChatGPT, etc.)

**Example: Building a user-facing feature**

```markdown
Copy to AI context:
- foundations/roles/frontend-developer.md
- overlays/user-advocate.md
- overlays/performance-optimizer.md
- goals/feature-request.md

Then prompt: "Build a responsive product card component for e-commerce"
```

The AI will now naturally consider UX, performance, and follow structured feature development.

### Method 2: Execution Flow (For Complex 3-Overlay Profiles)

When combining 3 overlays, add execution flow instructions to sequence behaviors:

```markdown
🔄 EXECUTION FLOW:

1. **First Pass:** [Execution Style] - Define your approach
2. **Second Pass:** [Context Overlay 1] - Apply specific focus  
3. **Third Pass:** [Context Overlay 2] - Add additional perspective
```

**Example: Critical Security Investigation**

```markdown
Copy to AI context:
- foundations/roles/backend-developer.md
- overlays/zero-trust.md
- overlays/security-specialist.md
- overlays/deep-investigator.md
- goals/bug-investigation.md

🔄 EXECUTION FLOW:
1. First Pass: zero-trust - Verify every assumption
2. Second Pass: security-specialist - Think like attacker
3. Third Pass: deep-investigator - Dig until root cause found
```

This prevents behavioral conflicts by clarifying priority and sequence.

### Method 3: Use Pre-Built Recipes

Check `recipes/` folder for common combinations:

- `bug-hunter.md` - For investigating production issues
- `code-reviewer.md` - For thorough code reviews
- `system-architect.md` - For technical design decisions

### Method 4: Router-Assisted (Coming Soon)

The Profile Router will analyze your request and auto-suggest optimal combinations.

## 📋 Common Combinations

### 🎨 **User-Focused Feature Development**

```
Senior Frontend Developer + User Advocate + Performance Optimizer + Feature Development
```

**When**: Building user-facing features that need to be fast and intuitive

### 🔐 **Security-Critical Implementation**

```
Senior Backend Developer + Security Specialist + Deep Investigator + Feature Development
```

**When**: Building authentication, payments, or handling sensitive data

### 🏗️ **Architecture & Design**

```
Principal Architect + System Designer + Strategic Thinker + Deliberate Planner
```

**When**: Making significant architectural decisions or designing new systems

### 🧹 **Code Quality & Refactoring**

```
[Any Role] + Clean Coder + Quality Advocate + Zero Trust + Code Review
```

**When**: Improving code quality, reducing technical debt, or cleanup work

### 🐛 **Bug Investigation**

```
[Relevant Role] + Deep Investigator + Analytical Thinker + Bug Investigation
```

**When**: Tracking down elusive bugs or production issues

### 📋 **Requirements Gathering**

```
Senior Product Manager + Analytical Thinker + Multi-Angle Analyzer + Feature Development
```

**When**: Clarifying requirements before development starts

### 🔍 **Thorough Code Review**

```
[Relevant Role] + Zero Trust + Multi-Angle Analyzer + Layered Thinking + Code Review
```

**When**: Reviewing critical changes or unfamiliar code

### 🎯 **Pragmatic Delivery**

```
[Any Role] + Pragmatic Implementer + Quality Advocate + Feature Development
```

**When**: Need to ship quickly but maintain quality standards

## 🎯 Selection Guide

### Choose Your Foundation (Required)

Pick the role that matches your work:

- **Principal Architect** - High-level system design, architectural blueprints, component boundaries, and integration patterns (no implementation)
- **Senior Frontend Developer** - Build scalable UIs with production-ready code, accessibility, and performance
- **Senior Backend Developer** - Implement reliable backend systems, APIs, and services with operational awareness
- **Senior Database Specialist** - Design schemas and write optimized queries, migrations, and indexes
- **Senior QA Engineer** - Comprehensive test strategies combining automation and manual testing
- **Senior Product Manager** - Define clear requirements with technical understanding and feasibility checks

### Add Overlays (1-3 recommended)

Enhance with specific behavioral traits:

**For Quality & Depth:**

- Deep Investigator, Zero Trust, Quality Advocate, Clean Coder

**For Strategy & Planning:**

- Strategic Thinker, Deliberate Planner, System Designer, Analytical Thinker

**For Speed & Delivery:**

- Pragmatic Implementer, Concise Communicator

**For Specific Concerns:**

- Security Specialist, Performance Optimizer, User Advocate

**For Problem Analysis:**

- Multi-Angle Analyzer, Layered Thinking

### Include a Goal (Optional but Recommended)

Provides structured workflow:

- **Feature Development** - Building new features
- **Bug Investigation** - Finding and fixing issues
- **Code Review** - Reviewing and improving code
- **Retrospective** - Learning from completed work

## ✨ What Makes FORGE Different

**Not just prompt templates** - Each component contains:

- Clear behavioral guidelines
- Specific technical instincts
- Decision-making frameworks
- Communication patterns
- Real-world habits and practices

**Built on prompt engineering best practices:**

- Chain-of-thought reasoning for better decisions
- ReAct framework (Reason → Act → Observe → Reflect)
- Reflexion-based self-critique for continuous improvement
- Least-to-Most problem decomposition
- Explicit constraints to prevent scope creep
- Verification gates for quality assurance
- Categorized overlays to prevent conflicts
- Execution flow sequencing for complex profiles

**BMAD-inspired patterns:**

- **Two-Phase Workflow:** Planning Phase → Execution Phase with phase gates
- **Agent Collaboration:** Multi-role workflows with clear handoffs and artifacts
- **Scale-Adaptive Planning:** Planning depth adjusts based on task complexity
- **Structured Handoffs:** Clear artifacts and context transfer between roles

**Composable by design** - Mix and match without conflicts:

- Overlays enhance any foundation role
- Goals provide structure to any combination
- Components are orthogonal and complementary
- Category system prevents contradictory behaviors

**Battle-tested content** - Based on what actually works:

- Distilled from years of development experience
- Refined through real AI interactions
- Focused on actionable behaviors, not theory
- Optimized for LLM consumption (2-3 overlays max)

## 🔄 BMAD-Inspired Patterns

FORGE incorporates patterns from BMAD (Build More, Architect Dreams) method:

### Two-Phase Workflow
All Goals follow a **Planning Phase → Execution Phase** structure:
- **Planning Phase:** Understand, analyze, design, create plan
- **Execution Phase:** Implement, verify, deliver
- **Phase Gates:** Review checkpoints for complex tasks

### Agent Collaboration
Multi-role workflows with structured handoffs:
- **Clear Handoffs:** Each role completes phase before handing off
- **Handoff Artifacts:** PRDs, architecture designs, implementation summaries
- **Parallel Work:** Roles work independently when possible, coordinate when needed
- See `foundations/agent-collaboration.md` for detailed patterns

### Scale-Adaptive Planning
Planning depth adjusts based on complexity:
- **Simple tasks:** Quick understanding, 3-5 key steps
- **Medium tasks:** Full analysis, component breakdown, risk assessment
- **Complex tasks:** Comprehensive analysis, multi-layer design, detailed planning
- Planning time scales from minutes to days based on complexity

## 🤝 Contributing

FORGE improves through community feedback:

- **Share your combinations** - What works well for your use cases?
- **Suggest new overlays** - Notice a behavioral gap?
- **Add resources** - Know a tech stack or domain deeply?
- **Improve existing content** - Found better wording or examples?

---

**🔥 Forge your perfect AI developer. Build better code. Ship faster.**
