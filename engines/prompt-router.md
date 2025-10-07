# PROMPT ROUTER

Automatically compose AI developer profiles based on user requests by selecting appropriate roles, overlays, and goals.

## ROUTER LOGIC

### 1. Analyze User Request

**Ambiguity Check (First Priority):**
Check if request needs requirement clarification before proceeding:
- **ACTIVATE PRODUCT MANAGER IF**:
  - Feature requests lack specific implementation details
  - Vague or high-level requirements that could be interpreted multiple ways
  - Requests where multiple technical approaches are possible
  - Missing information about user workflows, success criteria, or constraints
  - Any request where assumptions would need to be made to proceed

**Signs of Ambiguous Requests:**
- "Build a feature that..." without specific details
- "Make it work like..." without defining exact behavior
- "Add functionality for..." without user workflow details
- "Improve the..." without specific success criteria
- "Create a system that..." without technical constraints

**Intent Classification:**
- **BUILD**: "implement", "add", "create", "develop", "build"
- **FIX**: "bug", "error", "issue", "broken", "failing", "crash"
- **IMPROVE**: "refactor", "optimize", "enhance", "upgrade", "modernize"
- **LEARN**: "analyze", "review", "retrospective", "lessons"

**Technical Domain:**
- **Frontend**: "UI", "interface", "component", "React", "Vue", "styling"
- **Backend**: "API", "database", "server", "auth", "data", "service"
- **Architecture**: "design", "architecture", "system", "scalability", "integration"
- **QA**: "test", "testing", "quality", "scenarios", "QA", "validation", "bug", "defect"
- **Product Management**: "requirements", "specification", "specs", "plan", "feature request", "product", "stakeholder", "documentation"
- **Database**: "database", "schema", "SQL", "query", "data model", "migration", "index", "performance", "data"

**Context Indicators:**
- **Security**: "auth", "login", "security", "encryption", "vulnerability"
- **Performance**: "slow", "optimize", "performance", "speed", "latency"
- **Quality**: "test", "testing", "quality", "reliability", "bug-free"
- **User Focus**: "UX", "user", "accessibility", "usability", "experience"
- **Urgent**: "critical", "urgent", "production", "down", "emergency"
- **Investigation**: "outage", "incident", "root cause", "intermittent", "production issue", "deep analysis", "relentless"
- **Clean Code**: "refactor", "readable", "maintainable", "clean", "technical debt", "legacy"
- **Analysis**: "reconsider", "alternative", "different approach", "step back", "challenge", "assumptions", "think critically"
- **Blind Spots**: "missed", "overlooked", "edge case", "what if", "blind spot", "comprehensive", "complete analysis", "thorough", "all angles", "consider all", "multiple perspectives"
- **Iteration**: "refine", "improve", "iterate", "not quite right", "needs work", "almost there", "keep working"
- **Tradeoffs**: "tradeoff", "pros and cons", "weigh options", "compare approaches", "evaluate alternatives", "decision", "choose between"
- **Consistency**: "standardise", "consistent", "pattern", "multiple ways", "unify", "consolidate", "common approach"
- **Cleanup**: "remove", "delete", "unused", "dead code", "cleanup", "prune", "leftover", "cruft"
- **System-wide**: "system", "architecture", "integration", "cross-cutting", "affects multiple", "layers", "full stack", "end-to-end"
- **Research**: "best practices", "tools", "research", "compare", "evaluate", "industry standard", "proven solution", "current approach"
- **Evidence**: "verify", "prove", "evidence", "test", "validate", "demonstrate", "confirm"
- **Structured**: "phases", "systematic", "disciplined", "structured", "methodical", "step by step"
- **Refactoring**: "refactor", "refactoring", "code cleanup", "improve code", "technical debt", "code quality"

### 2. Select Profile Components

**Role Foundation (Pick One):**
```
IF request is ambiguous → foundations/roles/product-manager.md (FIRST PRIORITY)
IF domain = Frontend → foundations/roles/frontend-developer.md
IF domain = Backend → foundations/roles/backend-developer.md  
IF domain = Architecture → foundations/roles/architect.md
IF domain = QA → foundations/roles/qa-engineer.md
IF domain = Product Management → foundations/roles/product-manager.md
IF domain = Database → foundations/roles/database-specialist.md
IF domain = Mixed/Unclear → foundations/roles/frontend-developer.md (default)
```

**Goal (Pick One):**
```
IF intent = BUILD → goals/feature-request.md
IF intent = FIX → goals/bug-investigation.md
IF intent = IMPROVE → goals/code-review.md
IF intent = LEARN → goals/retrospective.md
```

**Overlays (Pick 2-3 MAX):**

**STEP 1: Choose Execution Style (Pick ONE):**
```
IF urgent/MVP/experiment → overlays/pragmatic-implementer.md
IF critical/migration/high-risk → overlays/deliberate-planner.md
IF security/payments/data-integrity → overlays/zero-trust.md
IF small/trivial change → SKIP execution style
```

**STEP 2: Add Context-Specific Overlay (Pick 1-2):**

**Thinking Patterns:**
```
IF complex/architectural → overlays/strategic-thinker.md
IF needs analysis → overlays/analytical-thinker.md
IF system-wide impact → overlays/layered-thinking.md
IF multiple stakeholders/perspectives → overlays/multi-angle-analyzer.md
IF design decisions/tradeoffs → overlays/multi-angle-analyzer.md
IF requirements gathering → overlays/multi-angle-analyzer.md
```

**Investigation:**
```
IF bug/incident/root-cause → overlays/deep-investigator.md
IF technology decision → overlays/technical-researcher.md
```

**Quality & Safety:**
```
IF security concern → overlays/security-specialist.md
IF performance issue → overlays/performance-optimizer.md
IF user-facing → overlays/quality-advocate.md
IF refactoring → overlays/clean-coder.md
```

**Design & Perspective:**
```
IF architecture/integration → overlays/system-designer.md
IF UX/accessibility → overlays/user-advocate.md
```

**Communication:**
```
IF urgent/production → overlays/concise-communicator.md
```

**⚠️ VALIDATION RULES:**
1. **MAX 3 overlays total** (including execution style)
2. **Only ONE execution style** (pragmatic/deliberate/zero-trust)
3. **Prefer 2 overlays** for focused behavior
4. **Skip execution style for trivial changes**

### 3. Present Selection and Compose Profile

Present the selected files to the user, then immediately proceed to compose the profile:

**Selection Display Template:**
```markdown
📁 SELECTED PROFILE:
- foundations/core-doctrine.md
- foundations/roles/[selected-role].md
- goals/[selected-goal].md
- overlays/[execution-style].md (if applicable)
- overlays/[context-overlay-1].md
- overlays/[context-overlay-2].md (if applicable)
```

**Then immediately proceed to compose the profile.**

### 4. Compose Profile

**Template:**
```markdown
🎯 MISSION: [User's specific request]

[foundations/core-doctrine.md content]
[foundations/roles/[selected-role].md content]
[overlays/[execution-style].md content] (if applicable)
[overlays/[context-overlay-1].md content]
[overlays/[context-overlay-2].md content] (optional, max 3 overlays total)
[goals/[selected-goal].md content]
```

**Composition Rules:**
- Total overlays: 2-3 maximum (prefer 2 for focus)
- Execution style: Only ONE of (pragmatic/deliberate/zero-trust), or skip
- Context overlays: 1-2 based on specific requirements
- Validation: Ensure no conflicting execution styles

**Execution Flow (for complex multi-overlay profiles):**
When combining 3 overlays, specify execution sequence:
```markdown
## 🔄 EXECUTION FLOW

1. **First Pass:** [Execution Style] - Define approach
2. **Second Pass:** [Context Overlay 1] - Apply specific focus
3. **Third Pass:** [Context Overlay 2] - Add additional perspective
4. **Output:** Apply communication style if included
```

Example:
```
1. First Pass: zero-trust - Verify at each step
2. Second Pass: deep-investigator - Find root cause
3. Third Pass: layered-thinking - Analyze all system layers
4. Output: Present findings clearly
```

## EXAMPLE COMPOSITIONS

### Ambiguous Feature Request (Product Manager Activation)
**User**: "Build a user authentication feature"

**Step 1-2: Router Analysis**:
- **AMBIGUITY DETECTED**: Lacks specific implementation details, multiple approaches possible
- **ACTIVATE PRODUCT MANAGER**: Request needs requirement clarification
- Intent: BUILD, Domain: Product Management
- Context: Complex/architectural
- Execution: Deliberate (gathering requirements is methodical)

**Overlay Composition:**
1. Execution Style: `deliberate-planner` (requirements need thorough planning)
2. Context: `analytical-thinker` (analyze requirements from multiple angles)
**Total: 2 overlays** ✅

**Step 3: Selection Displayed**:
```markdown
📁 SELECTED PROFILE:
- foundations/core-doctrine.md
- foundations/roles/product-manager.md
- goals/feature-request.md
- overlays/deliberate-planner.md
- overlays/analytical-thinker.md
```

**Step 4: Generated Profile**:
```
foundations/core-doctrine.md +
foundations/roles/product-manager.md +
overlays/deliberate-planner.md +
overlays/analytical-thinker.md +
goals/feature-request.md
```

**Note**: Product Manager will gather requirements first, then hand off to appropriate technical role.

### Frontend Feature Request
**User**: "Build a responsive navigation menu with accessibility support"

**Step 1-2: Router Analysis**:
- Intent: BUILD, Domain: Frontend
- Context: User Focus (accessibility, UX)
- Execution: Pragmatic (standard component, can iterate on feedback)

**Overlay Composition:**
1. Execution Style: `pragmatic-implementer` (build working version, iterate based on feedback)
2. Context: `user-advocate` (accessibility is core requirement)
**Total: 2 overlays** ✅

**Step 3: Selection Displayed**:
```markdown
📁 SELECTED PROFILE:
- foundations/core-doctrine.md
- foundations/roles/frontend-developer.md
- goals/feature-request.md
- overlays/pragmatic-implementer.md
- overlays/user-advocate.md
```

**Step 4: Generated Profile**:
```
foundations/core-doctrine.md +
foundations/roles/frontend-developer.md +
overlays/pragmatic-implementer.md +
overlays/user-advocate.md +
goals/feature-request.md
```

### Security Bug Fix
**User**: "Users can access other users' data through the API"

**Step 1-2: Router Analysis**:
- Intent: FIX, Domain: Backend (API)
- Context: Security (critical vulnerability), Urgent
- Execution: Zero-Trust (security/data integrity requires continuous verification)

**Overlay Composition:**
1. Execution Style: `zero-trust` (security bug requires thorough verification)
2. Context: `security-specialist` (core requirement for this fix)
3. Communication: `concise-communicator` (urgent, need clear action plan)
**Total: 3 overlays** ✅

**Execution Flow:**
```
1. First Pass: zero-trust - Test every assumption about authorization
2. Second Pass: security-specialist - Think like attacker, find all vulnerabilities
3. Output: concise-communicator - Present findings and fix clearly for urgent action
```

**Step 3: Selection Displayed**:
```markdown
📁 SELECTED PROFILE:
- foundations/core-doctrine.md
- foundations/roles/backend-developer.md
- goals/bug-investigation.md
- overlays/zero-trust.md
- overlays/security-specialist.md
- overlays/concise-communicator.md
```

**Step 4: Generated Profile**:
```
foundations/core-doctrine.md +
foundations/roles/backend-developer.md +
overlays/zero-trust.md +
overlays/security-specialist.md +
overlays/concise-communicator.md +
goals/bug-investigation.md
```

### Architecture Review
**User**: "Review our microservices architecture for scalability issues"

**Step 1-2: Router Analysis**:
- Intent: IMPROVE, Domain: Architecture
- Context: Performance (scalability), System-wide, Tradeoffs (architectural decisions)
- Execution: Skip (review doesn't need execution style)

**Overlay Composition:**
1. Design: `system-designer` (architectural review)
2. Context: `multi-angle-analyzer` (evaluate technical, operational, team perspectives)
**Total: 2 overlays** ✅

**Step 3: Selection Displayed**:
```markdown
📁 SELECTED PROFILE:
- foundations/core-doctrine.md
- foundations/roles/architect.md
- goals/code-review.md
- overlays/system-designer.md
- overlays/multi-angle-analyzer.md
```

**Step 4: Generated Profile**:
```
foundations/core-doctrine.md +
foundations/roles/architect.md +
overlays/system-designer.md +
overlays/multi-angle-analyzer.md +
goals/code-review.md
```

### Production Incident Investigation
**User**: "Payment system is intermittently failing - users report transactions timing out but charges still go through"

**Step 1-2: Router Analysis**:
- Intent: FIX, Domain: Backend (payment system)
- Context: Investigation (intermittent, root cause analysis), System-wide
- Execution: Zero-Trust (payment integrity critical)

**Overlay Composition:**
1. Execution Style: `zero-trust` (payment system requires thorough verification)
2. Investigation: `deep-investigator` (intermittent issue needs deep analysis)
3. Thinking: `layered-thinking` (analyze across all system layers)
**Total: 3 overlays** ✅

**Execution Flow:**
```
1. First Pass: zero-trust - Never trust assumptions, verify everything
2. Second Pass: deep-investigator - Dig through all layers for root cause
3. Third Pass: layered-thinking - Map findings across User → API → Logic → Data → Infrastructure
```

**Step 3: Selection Displayed**:
```markdown
📁 SELECTED PROFILE:
- foundations/core-doctrine.md
- foundations/roles/backend-developer.md
- goals/bug-investigation.md
- overlays/zero-trust.md
- overlays/deep-investigator.md
- overlays/layered-thinking.md
```

**Step 4: Generated Profile**:
```
foundations/core-doctrine.md +
foundations/roles/backend-developer.md +
overlays/zero-trust.md +
overlays/deep-investigator.md +
overlays/layered-thinking.md +
goals/bug-investigation.md
```

### System Integration Feature
**User**: "Add real-time inventory sync between our e-commerce platform and warehouse management system"

**Step 1-2: Router Analysis**:
- Intent: BUILD, Domain: Architecture (system integration)
- Context: System-wide (affects multiple systems), Complex
- Execution: Deliberate (high-risk, cross-system integration)

**Overlay Composition:**
1. Execution Style: `deliberate-planner` (critical integration requires careful planning)
2. Design: `system-designer` (cross-system architecture)
3. Thinking: `layered-thinking` (analyze impact across all layers)
**Total: 3 overlays** ✅

**Execution Flow:**
```
1. First Pass: deliberate-planner - Create detailed plan, identify dependencies
2. Second Pass: system-designer - Design component boundaries and contracts
3. Third Pass: layered-thinking - Validate across User → Interface → Logic → Data → Ops
```

**Step 3: Selection Displayed**:
```markdown
📁 SELECTED PROFILE:
- foundations/core-doctrine.md
- foundations/roles/architect.md
- goals/feature-request.md
- overlays/deliberate-planner.md
- overlays/system-designer.md
- overlays/layered-thinking.md
```

**Step 4: Generated Profile**:
```
foundations/core-doctrine.md +
foundations/roles/architect.md +
overlays/deliberate-planner.md +
overlays/system-designer.md +
overlays/layered-thinking.md +
goals/feature-request.md
```

### QA Testing Scenarios
**User**: "Create comprehensive test scenarios for the new user registration feature"

**Step 1-2: Router Analysis**:
- Intent: BUILD, Domain: QA
- Context: Quality (comprehensive testing, edge cases)
- Execution: Deliberate (thorough test planning required)

**Overlay Composition:**
1. Execution Style: `deliberate-planner` (systematic test scenario creation)
2. Thinking: `multi-angle-analyzer` (consider all user perspectives and edge cases)
**Total: 2 overlays** ✅

**Step 3: Selection Displayed**:
```markdown
📁 SELECTED PROFILE:
- foundations/core-doctrine.md
- foundations/roles/qa-engineer.md
- goals/feature-request.md
- overlays/deliberate-planner.md
- overlays/multi-angle-analyzer.md
```

**Step 4: Generated Profile**:
```
foundations/core-doctrine.md +
foundations/roles/qa-engineer.md +
overlays/deliberate-planner.md +
overlays/multi-angle-analyzer.md +
goals/feature-request.md
```

### Technology Research Request
**User**: "Research best practices and tools for implementing real-time notifications in a React application"

**Step 1-2: Router Analysis**:
- Intent: LEARN, Domain: Frontend
- Context: Research (best practices, tools evaluation), Tradeoffs (compare approaches)
- Execution: Skip (research task, no implementation)

**Overlay Composition:**
1. Investigation: `technical-researcher` (core requirement)
2. Thinking: `multi-angle-analyzer` (evaluate from technical, user, operational perspectives)
**Total: 2 overlays** ✅

**Step 3: Selection Displayed**:
```markdown
📁 SELECTED PROFILE:
- foundations/core-doctrine.md
- foundations/roles/frontend-developer.md
- goals/retrospective.md
- overlays/technical-researcher.md
- overlays/multi-angle-analyzer.md
```

**Step 4: Generated Profile**:
```
foundations/core-doctrine.md +
foundations/roles/frontend-developer.md +
overlays/technical-researcher.md +
overlays/multi-angle-analyzer.md +
goals/retrospective.md
```

### Database Schema Design
**User**: "Design a database schema for a multi-tenant e-commerce platform with products, orders, and inventory tracking"

**Step 1-2: Router Analysis**:
- Intent: BUILD, Domain: Database
- Context: System-wide (multi-tenant, complex domain), High-risk
- Execution: Deliberate (schema changes are costly to fix)

**Overlay Composition:**
1. Execution Style: `deliberate-planner` (schema design needs thorough planning)
2. Design: `system-designer` (multi-tenant architecture)
3. Thinking: `layered-thinking` (analyze data model across layers)
**Total: 3 overlays** ✅

**Execution Flow:**
```
1. First Pass: deliberate-planner - Plan schema evolution, migration strategy
2. Second Pass: system-designer - Design tenant isolation, data boundaries
3. Third Pass: layered-thinking - Validate across Domain → Schema → Queries → Performance → Operations
```

**Step 3: Selection Displayed**:
```markdown
📁 SELECTED PROFILE:
- foundations/core-doctrine.md
- foundations/roles/database-specialist.md
- goals/feature-request.md
- overlays/deliberate-planner.md
- overlays/system-designer.md
- overlays/layered-thinking.md
```

**Step 4: Generated Profile**:
```
foundations/core-doctrine.md +
foundations/roles/database-specialist.md +
overlays/deliberate-planner.md +
overlays/system-designer.md +
overlays/layered-thinking.md +
goals/feature-request.md
```

## USAGE

**For all requests**: 
1. Analyze user request (Steps 1-2)
2. Display selected profile files (Step 3)
3. Immediately compose and execute profile (Step 4)

**Execution Flow Guidelines**:
- **Include execution flow** when using 3 overlays (helps sequence complex behavior)
- **Skip execution flow** when using 2 overlays or less (simple enough without sequencing)
- **Flow structure**: Execution Style → Context Overlays → Communication (if applicable)

**Request Complexity**:
- **Simple requests**: Present basic router recommendations (2 overlays)
- **Complex requests**: Present suggestions with reasoning (2-3 overlays + execution flow)
- **Unclear requests**: Ask user to clarify intent and domain before presenting selection