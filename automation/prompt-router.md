# INTELLIGENT PROMPT ROUTER

**🎯 PURPOSE**: Automatically select and compose optimal framework combinations based on user requests.

---

## 🧠 ROUTER LOGIC

### Step 1: Analyze User Request
**Intent Classification**:
- **BUILD**: "implement", "add", "create", "develop", "build"
- **FIX**: "bug", "error", "issue", "broken", "failing", "crash"
- **IMPROVE**: "refactor", "optimize", "enhance", "upgrade", "modernize"
- **LEARN**: "analyze", "review", "retrospective", "lessons"

**Context Indicators**:
- **Security**: "auth", "login", "security", "encryption", "vulnerability"
- **Performance**: "slow", "optimize", "performance", "speed", "latency"
- **Testing**: "test", "coverage", "TDD", "quality"
- **Urgent**: "critical", "urgent", "production", "down", "emergency"

### Step 2: Select Base Playbook
```
IF intent = BUILD → feature-request.md
IF intent = FIX → bug-investigation.md
IF intent = IMPROVE → code-review.md
IF intent = LEARN → retrospective.md
```

### Step 3: Recommend Directives
```
IF context contains "urgent" OR "critical" OR "production" 
  → ADD concise-communication.md

IF context contains "security" OR "auth" OR "vulnerability"
  → ADD security-first.md

IF context contains "test" OR "quality" OR intent = BUILD with complexity > medium
  → ADD testing-focus.md

IF context contains "strategic" OR "architecture" OR "complex" OR "enterprise"
  → ADD strategic-tactical.md

IF context contains "business" OR "stakeholder" OR "validate" OR "critical decision"
  → ADD critical-review.md
```

---

## 🎯 ROUTER PROMPT

```markdown
# FRAMEWORK ROUTER - ANALYZE AND COMPOSE

Based on this user request: "[USER_REQUEST]"

## ANALYSIS
**Intent Classification**: [BUILD/FIX/IMPROVE/LEARN]
**Urgency Level**: [LOW/MEDIUM/HIGH/CRITICAL]
**Complexity Assessment**: [SIMPLE/MEDIUM/COMPLEX]
**Context Indicators**: [security, performance, testing, etc.]

## RECOMMENDATION
**Base Playbook**: [selected playbook with reasoning]
**Suggested Directives**: [list with reasoning]
**Estimated Session Length**: [time estimate]

## GENERATED PROMPT
```

---

## 🔧 AUTOMATIC COMPOSITION EXAMPLES

### Example 1: Feature Request
**User Input**: "Implement user authentication with OAuth2 and MFA"

**Router Analysis**:
- Intent: BUILD (implement)
- Context: security (auth, OAuth2, MFA)
- Complexity: MEDIUM-HIGH
- Urgency: MEDIUM

**Generated Prompt**:
```markdown
🎯 MISSION BRIEF: Implement user authentication with OAuth2 and MFA

[core-doctrine.md content]

[feature-request.md content]

[security-first.md content]

[testing-focus.md content]
```

### Example 2: Critical Bug
**User Input**: "Production login system is down, users can't authenticate"

**Router Analysis**:
- Intent: FIX (down, can't authenticate)
- Context: security (login, authenticate), urgent (production, down)
- Complexity: HIGH
- Urgency: CRITICAL

**Generated Prompt**:
```markdown
🎯 MISSION BRIEF: Production login system is down, users can't authenticate

[core-doctrine.md content]

[bug-investigation.md content]

[concise-communication.md content]

[security-first.md content]
```

### Example 3: Code Improvement
**User Input**: "Refactor payment processing code to improve performance"

**Router Analysis**:
- Intent: IMPROVE (refactor, improve)
- Context: performance (improve performance)
- Complexity: MEDIUM
- Urgency: LOW

**Generated Prompt**:
```markdown
🎯 MISSION BRIEF: Refactor payment processing code to improve performance

[core-doctrine.md content]

[code-review.md content]

[testing-focus.md content]
```

---

## 🎛️ CUSTOMIZATION OPTIONS

### Complexity-Based Adaptation
**Simple Tasks** (< 1 day):
- Use core-doctrine.md with streamlined protocols
- Streamlined 3-phase approach: Investigate → Execute → Verify

**Medium Tasks** (1-5 days):
- Standard framework with selected playbook + directives

**Complex Tasks** (> 5 days):
- Full framework + session state management + enhanced quality gates

### Team Preferences
```markdown
## TEAM CONFIGURATION
- Default communication style: [STANDARD/CONCISE]
- Security requirements: [BASIC/ENHANCED/STRICT]
- Testing requirements: [STANDARD/COMPREHENSIVE]
- Documentation level: [MINIMAL/STANDARD/COMPREHENSIVE]
```

### Project-Specific Rules
```markdown
## PROJECT OVERRIDES
- Always include security directive for auth-related tasks
- Require testing directive for API changes
- Use concise communication during sprint cycles
- Enhanced documentation for client-facing features
```

---

## 🚨 FALLBACK HANDLING

### Ambiguous Requests
When intent is unclear:
```markdown
**CLARIFICATION NEEDED**

Your request: "[USER_REQUEST]"

Please clarify:
1. Primary goal: [BUILD new feature / FIX existing issue / IMPROVE code quality / ANALYZE results]
2. Urgency: [Can wait / Needed soon / Urgent / Critical]
3. Scope: [Small change / Medium feature / Large project]

Based on your answers, I'll generate the optimal framework prompt.
```

### Multiple Intents
When request contains multiple intents:
```markdown
**MULTIPLE OBJECTIVES DETECTED**

Your request appears to involve:
- [Intent 1]: [description]
- [Intent 2]: [description]

Recommended approach:
1. Start with [primary intent] using [playbook]
2. Follow up with [secondary intent] using [playbook]

Would you like to proceed with this plan or focus on one objective first?
```

---

## 🎯 ROUTER USAGE INSTRUCTIONS

### For Users
1. **Simply describe your need** in natural language
2. **Router analyzes and recommends** framework combination
3. **Review the generated prompt** before proceeding
4. **Provide clarification** if router asks questions

### For Framework Maintainers
1. **Monitor router effectiveness** through user feedback
2. **Update classification rules** based on common patterns
3. **Add new directive combinations** as team needs evolve
4. **Refine complexity assessment** based on actual task duration

---

**🎯 SMART ROUTING. ZERO COGNITIVE LOAD. MAXIMUM FRAMEWORK POWER.**
