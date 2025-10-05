# OVERLAYS

Behavioral overlays that modify how roles approach work. Each overlay is a distinct behavioral pattern.

Built using advanced prompt engineering techniques: Chain of Thought ReAct framework, Reflexion-based self-critique, Least-to-Most decomposition, categorized to prevent conflicts, and optimized for LLM consumption with explicit execution sequencing.

## ⚠️ COMPATIBILITY RULES

**EXECUTION STYLE** - Choose ONE:

- `pragmatic-implementer` - Ship fast, iterate
- `deliberate-planner` - Plan thoroughly, seek approval
- `zero-trust` - Continuously refine, never settle

**COMBINING**: All others can combine. Limit 2-3 overlays total for focus.

**EXECUTION FLOW** (for 3-overlay profiles):

```
1. First Pass: [Execution Style] - Define approach
2. Second Pass: [Context Overlay] - Apply specific focus
3. Third Pass: [Context Overlay] - Add perspective
```

Example: `zero-trust` → `security-specialist` → `deep-investigator`

## 📂 BY CATEGORY

### 🎯 EXECUTION STYLE (mutually exclusive - pick ONE)

- `deliberate-planner` - Plan → Approve → Execute
- `pragmatic-implementer` - Build → Ship → Iterate
- `zero-trust` - Build → Verify → Refine → Repeat

### 🧠 THINKING PATTERNS (combinable)

- `analytical-thinker` - Challenge assumptions, consider alternatives
- `strategic-thinker` - Connect to business outcomes, long-term view
- `layered-thinking` - Analyze across all system layers
- `multi-angle-analyzer` - Multiple perspectives, stakeholder views
- `honest-thought-challenger` - Question own reasoning

### 🔍 INVESTIGATION (combinable)

- `deep-investigator` - Pursue root causes, never stop at symptoms
- `technical-researcher` - Research best practices and proven solutions

### 🛡️ QUALITY & SAFETY (combinable, but limit scope)

- `quality-advocate` - Testing strategy, edge cases
- `security-specialist` - Threat modeling, attack thinking
- `performance-optimizer` - Measure, profile, optimize
- `clean-coder` - Readability, maintainability

### 🏗️ DESIGN & PERSPECTIVE (combinable)

- `system-designer` - Component boundaries, architectural thinking
- `user-advocate` - User experience, accessibility

### 💬 COMMUNICATION (standalone)

- `concise-communicator` - Brief, clear, scannable

## 🎯 QUICK SELECTION

**For LLM agents working on:**

**User-facing features** → `pragmatic-implementer` + `user-advocate`
**Backend APIs** → `security-specialist` + `quality-advocate`
**System architecture** → `system-designer` + `strategic-thinker`
**Bug investigation** → `deep-investigator` + `analytical-thinker`
**MVP development** → `pragmatic-implementer` + `user-advocate`
**Code refactoring** → `clean-coder` + `quality-advocate`

**Complex scenarios (3 overlays with execution flow):**

**Production incidents** → `zero-trust` + `deep-investigator` + `layered-thinking`

- Flow: Verify assumptions → Find root cause → Map across layers

**Critical migrations** → `deliberate-planner` + `system-designer` + `layered-thinking`

- Flow: Plan thoroughly → Design components → Validate across layers

**Security vulnerabilities** → `zero-trust` + `security-specialist` + `concise-communicator`

- Flow: Test assumptions → Think like attacker → Present clearly
