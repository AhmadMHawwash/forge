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
- **Investigation**: "outage", "incident", "root cause", "intermittent", "production issue"

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
IF context = Investigation → overlays/root-cause-analyzer.md

Always consider:
- overlays/critical-thinker.md (for complex or risky work)
- overlays/pragmatic-implementer.md (for quick delivery needs)
- overlays/strategic-thinker.md (for business-critical decisions)
- overlays/relentless-problem-solver.md (for deep technical problems)
```

### 3. Present Selection for Confirmation

Before composing the profile, present the selected files to the user for confirmation:

**Selection Summary Template:**
```markdown
📋 PROFILE SELECTION

Based on your request: "[User's specific request]"

🔍 ANALYSIS:
- Intent: [BUILD/FIX/IMPROVE/LEARN]
- Domain: [Frontend/Backend/Architecture]
- Context: [Security/Performance/Quality/etc.]

📁 SELECTED FILES:
✅ Foundation: foundations/core-doctrine.md (always included)
✅ Role: foundations/roles/[selected-role].md
✅ Goal: goals/[selected-goal].md
✅ Overlays:
  - overlays/[selected-overlay-1].md
  - overlays/[selected-overlay-2].md
  - overlays/[selected-overlay-3].md (if applicable)

⚠️  CONFIRMATION REQUIRED:
Do you want to proceed with this profile composition? 
Type 'yes' to continue or 'modify' to adjust the selection.
```

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
📋 PROFILE SELECTION

Based on your request: "Build a responsive navigation menu with accessibility support"

🔍 ANALYSIS:
- Intent: BUILD
- Domain: Frontend
- Context: User Focus (accessibility)

📁 SELECTED FILES:
✅ Foundation: foundations/core-doctrine.md (always included)
✅ Role: foundations/roles/frontend-developer.md
✅ Goal: goals/feature-request.md
✅ Overlays:
  - overlays/user-advocate.md
  - overlays/quality-advocate.md

⚠️  CONFIRMATION REQUIRED:
Do you want to proceed with this profile composition? 
Type 'yes' to continue or 'modify' to adjust the selection.
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
📋 PROFILE SELECTION

Based on your request: "Users can access other users' data through the API"

🔍 ANALYSIS:
- Intent: FIX
- Domain: Backend
- Context: Security, Urgent

📁 SELECTED FILES:
✅ Foundation: foundations/core-doctrine.md (always included)
✅ Role: foundations/roles/backend-developer.md
✅ Goal: goals/bug-investigation.md
✅ Overlays:
  - overlays/security-specialist.md
  - overlays/critical-thinker.md
  - overlays/concise-communicator.md

⚠️  CONFIRMATION REQUIRED:
Do you want to proceed with this profile composition? 
Type 'yes' to continue or 'modify' to adjust the selection.
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
📋 PROFILE SELECTION

Based on your request: "Review our microservices architecture for scalability issues"

🔍 ANALYSIS:
- Intent: IMPROVE
- Domain: Architecture
- Context: Performance

📁 SELECTED FILES:
✅ Foundation: foundations/core-doctrine.md (always included)
✅ Role: foundations/roles/architect.md
✅ Goal: goals/code-review.md
✅ Overlays:
  - overlays/system-designer.md
  - overlays/performance-optimizer.md
  - overlays/strategic-thinker.md

⚠️  CONFIRMATION REQUIRED:
Do you want to proceed with this profile composition? 
Type 'yes' to continue or 'modify' to adjust the selection.
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
📋 PROFILE SELECTION

Based on your request: "Payment system is intermittently failing - users report transactions timing out but charges still go through"

🔍 ANALYSIS:
- Intent: FIX
- Domain: Backend
- Context: Investigation

📁 SELECTED FILES:
✅ Foundation: foundations/core-doctrine.md (always included)
✅ Role: foundations/roles/backend-developer.md
✅ Goal: goals/bug-investigation.md
✅ Overlays:
  - overlays/root-cause-analyzer.md
  - overlays/critical-thinker.md

⚠️  CONFIRMATION REQUIRED:
Do you want to proceed with this profile composition? 
Type 'yes' to continue or 'modify' to adjust the selection.
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