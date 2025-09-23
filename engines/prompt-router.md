# PROMPT ROUTER

Automatically compose AI developer profiles based on user requests by selecting appropriate roles, enhancements, and operations.

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

### 2. Select Profile Components

**Role Foundation (Pick One):**
```
IF domain = Frontend → roles/frontend-developer.md
IF domain = Backend → roles/backend-developer.md  
IF domain = Architecture → roles/architect.md
IF domain = Mixed/Unclear → roles/frontend-developer.md (default)
```

**Operation (Pick One):**
```
IF intent = BUILD → operations/feature-request.md
IF intent = FIX → operations/bug-investigation.md
IF intent = IMPROVE → operations/code-review.md
IF intent = LEARN → operations/retrospective.md
```

**Enhancements (Pick 1-3):**
```
IF context = Security → security-specialist.md
IF context = Performance → performance-optimizer.md
IF context = Quality → quality-advocate.md
IF context = User Focus → user-advocate.md
IF context = Urgent → concise-communicator.md

Always consider:
- critical-thinker.md (for complex or risky work)
- pragmatic-implementer.md (for quick delivery needs)
- strategic-thinker.md (for business-critical decisions)
- relentless-problem-solver.md (for deep technical problems)
```

### 3. Compose Profile

**Template:**
```markdown
🎯 MISSION: [User's specific request]

[foundation/core-doctrine.md content]
[foundation/roles/[selected-role].md content]
[enhancements/[selected-enhancement-1].md content]
[enhancements/[selected-enhancement-2].md content]
[operations/[selected-operation].md content]
```

## EXAMPLE COMPOSITIONS

### Frontend Feature Request
**User**: "Build a responsive navigation menu with accessibility support"

**Router Analysis**:
- Intent: BUILD (build)
- Domain: Frontend (navigation, responsive)
- Context: User Focus (accessibility)

**Generated Profile**:
```
foundation/core-doctrine.md +
foundation/roles/frontend-developer.md +
enhancements/user-advocate.md +
enhancements/quality-advocate.md +
operations/feature-request.md
```

### Security Bug Fix
**User**: "Users can access other users' data through the API"

**Router Analysis**:
- Intent: FIX (bug, security issue)
- Domain: Backend (API)
- Context: Security (data access), Urgent (security vulnerability)

**Generated Profile**:
```
foundation/core-doctrine.md +
foundation/roles/backend-developer.md +
enhancements/security-specialist.md +
enhancements/critical-thinker.md +
enhancements/concise-communicator.md +
operations/bug-investigation.md
```

### Architecture Review
**User**: "Review our microservices architecture for scalability issues"

**Router Analysis**:
- Intent: IMPROVE (review, architecture)
- Domain: Architecture (microservices, scalability)
- Context: Performance (scalability)

**Generated Profile**:
```
foundation/core-doctrine.md +
foundation/roles/architect.md +
enhancements/system-designer.md +
enhancements/performance-optimizer.md +
enhancements/strategic-thinker.md +
operations/code-review.md
```

## USAGE

**For simple requests**: Use router recommendations as-is
**For complex requests**: Start with router suggestions, then customize based on specific needs
**For unclear requests**: Ask user to clarify intent and domain before composing profile