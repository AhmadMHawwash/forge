# PROMPT ROUTER

Automatically compose AI developer profiles based on user requests by selecting appropriate roles, overlays, and goals.

## ROUTER LOGIC

### 1. Analyze User Request

**Intent Classification:**
- **BUILD**: "implement", "add", "create", "develop", "build"
- **FIX**: "bug", "error", "issue", "broken", "failing", "crash"
- **IMPROVE**: "refactor", "optimize", "enhance", "upgrade", "modernize"
- **LEARN**: "analyze", "review", "retrospective", "lessons"

**Technical Domain:**
- **Frontend**: "UI", "interface", "component", "React", "Vue", "styling"
- **Backend**: "API", "database", "server", "auth", "data", "service"
- **Architecture**: "design", "architecture", "system", "scalability", "integration"

**Context Indicators:**
- **Security**: "auth", "login", "security", "encryption", "vulnerability"
- **Performance**: "slow", "optimize", "performance", "speed", "latency"
- **Quality**: "test", "testing", "quality", "reliability", "bug-free"
- **User Focus**: "UX", "user", "accessibility", "usability", "experience"
- **Urgent**: "critical", "urgent", "production", "down", "emergency"
- **Investigation**: "outage", "incident", "root cause", "intermittent", "production issue", "deep analysis", "relentless"
- **Clean Code**: "refactor", "readable", "maintainable", "clean", "technical debt", "legacy"
- **Analysis**: "reconsider", "alternative", "different approach", "step back", "challenge", "assumptions", "think critically"

### 2. Select Profile Components

**Role Foundation (Pick One):**
```
IF domain = Frontend → foundations/roles/frontend-developer.md
IF domain = Backend → foundations/roles/backend-developer.md  
IF domain = Architecture → foundations/roles/architect.md
IF domain = Mixed/Unclear → foundations/roles/frontend-developer.md (default)
```

**Goal (Pick One):**
```
IF intent = BUILD → goals/feature-request.md
IF intent = FIX → goals/bug-investigation.md
IF intent = IMPROVE → goals/code-review.md
IF intent = LEARN → goals/retrospective.md
```

**Overlays (Pick 1-3):**
```
IF context = Security → overlays/security-specialist.md
IF context = Performance → overlays/performance-optimizer.md
IF context = Quality → overlays/quality-advocate.md
IF context = User Focus → overlays/user-advocate.md
IF context = Urgent → overlays/concise-communicator.md
IF context = Investigation → overlays/deep-investigator.md
IF context = Clean Code → overlays/clean-coder.md
IF context = Analysis → overlays/analytical-thinker.md

Always consider:
- overlays/analytical-thinker.md (for complex or risky work requiring deep thinking)
- overlays/pragmatic-implementer.md (for quick delivery needs)
- overlays/strategic-thinker.md (for business-critical decisions)
- overlays/deep-investigator.md (for deep technical problems and investigations)
- overlays/clean-coder.md (for maintainable, readable code)
```

### 3. Present Selection for Confirmation

Before composing the profile, present the selected files to the user for confirmation:

**Simplified Selection Template:**
```markdown
📁 SELECTED FILES:
- foundations/core-doctrine.md
- foundations/roles/[selected-role].md
- goals/[selected-goal].md
- overlays/[selected-overlay-1].md
- overlays/[selected-overlay-2].md
- overlays/[selected-overlay-3].md (if applicable)

Proceed? (yes/modify/no)
```

**Note:** Skip the detailed analysis output - just show the selected file names for confirmation.

**Wait for user confirmation before proceeding to Step 4.**

### 4. Compose Profile

**Template:**
```markdown
🎯 MISSION: [User's specific request]

[foundations/core-doctrine.md content]
[foundations/roles/[selected-role].md content]
[overlays/[selected-overlay-1].md content]
[overlays/[selected-overlay-2].md content]
[goals/[selected-goal].md content]
```

## EXAMPLE COMPOSITIONS

### Frontend Feature Request
**User**: "Build a responsive navigation menu with accessibility support"

**Step 1-2: Router Analysis**:
- Intent: BUILD (build)
- Domain: Frontend (navigation, responsive)
- Context: User Focus (accessibility)

**Step 3: Selection Presented to User**:
```markdown
📁 SELECTED FILES:
- foundations/core-doctrine.md
- foundations/roles/frontend-developer.md
- goals/feature-request.md
- overlays/user-advocate.md
- overlays/quality-advocate.md

Proceed? (yes/modify/no)
```

**Step 4: Generated Profile** (after user confirms):
```
foundations/core-doctrine.md +
foundations/roles/frontend-developer.md +
overlays/user-advocate.md +
overlays/quality-advocate.md +
goals/feature-request.md
```

### Security Bug Fix
**User**: "Users can access other users' data through the API"

**Step 1-2: Router Analysis**:
- Intent: FIX (bug, security issue)
- Domain: Backend (API)
- Context: Security (data access), Urgent (security vulnerability)

**Step 3: Selection Presented to User**:
```markdown
📁 SELECTED FILES:
- foundations/core-doctrine.md
- foundations/roles/backend-developer.md
- goals/bug-investigation.md
- overlays/security-specialist.md
- overlays/critical-thinker.md
- overlays/concise-communicator.md

Proceed? (yes/modify/no)
```

**Step 4: Generated Profile** (after user confirms):
```
foundations/core-doctrine.md +
foundations/roles/backend-developer.md +
overlays/security-specialist.md +
overlays/critical-thinker.md +
overlays/concise-communicator.md +
goals/bug-investigation.md
```

### Architecture Review
**User**: "Review our microservices architecture for scalability issues"

**Step 1-2: Router Analysis**:
- Intent: IMPROVE (review, architecture)
- Domain: Architecture (microservices, scalability)
- Context: Performance (scalability)

**Step 3: Selection Presented to User**:
```markdown
📁 SELECTED FILES:
- foundations/core-doctrine.md
- foundations/roles/architect.md
- goals/code-review.md
- overlays/system-designer.md
- overlays/performance-optimizer.md
- overlays/strategic-thinker.md

Proceed? (yes/modify/no)
```

**Step 4: Generated Profile** (after user confirms):
```
foundations/core-doctrine.md +
foundations/roles/architect.md +
overlays/system-designer.md +
overlays/performance-optimizer.md +
overlays/strategic-thinker.md +
goals/code-review.md
```

### Production Incident Investigation
**User**: "Payment system is intermittently failing - users report transactions timing out but charges still go through"

**Step 1-2: Router Analysis**:
- Intent: FIX (failing, investigation needed)
- Domain: Backend (payment system)
- Context: Investigation (intermittent, production issue)

**Step 3: Selection Presented to User**:
```markdown
📁 SELECTED FILES:
- foundations/core-doctrine.md
- foundations/roles/backend-developer.md
- goals/bug-investigation.md
- overlays/root-cause-analyzer.md
- overlays/critical-thinker.md

Proceed? (yes/modify/no)
```

**Step 4: Generated Profile** (after user confirms):
```
foundations/core-doctrine.md +
foundations/roles/backend-developer.md +
overlays/root-cause-analyzer.md +
overlays/critical-thinker.md +
goals/bug-investigation.md
```

## USAGE

**For all requests**: 
1. Analyze user request (Steps 1-2)
2. Present file selection for confirmation (Step 3)
3. Wait for user approval before proceeding
4. Compose profile only after confirmation (Step 4)

**User Response Options**:
- **"yes"** or **"proceed"**: Continue with selected files
- **"modify"**: Allow user to request changes to selection
- **"no"**: Cancel profile composition

**For simple requests**: Present basic router recommendations
**For complex requests**: Present router suggestions with explanation of reasoning
**For unclear requests**: Ask user to clarify intent and domain before presenting selection