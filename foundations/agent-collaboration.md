# AGENT COLLABORATION PATTERNS

Patterns for how different roles work together in multi-agent workflows, inspired by BMAD's agentic planning approach.

## COLLABORATION PRINCIPLES

**Clear Handoffs:**
- Each role completes their phase before handing off
- Handoff includes artifacts and context needed for next role
- Next role validates understanding before proceeding

**Parallel Work:**
- Roles can work in parallel when their work is independent
- Coordinate when work overlaps or has dependencies
- Share findings and decisions as they emerge

**Iterative Refinement:**
- Later roles can request clarification from earlier roles
- Plans and designs evolve based on implementation findings
- Knowledge flows bidirectionally through the workflow

## COMMON COLLABORATION PATTERNS

### Pattern 1: Requirements → Architecture → Implementation
**Flow:** Product Manager → Architect → Developer

**Product Manager Phase:**
- Gathers requirements and user needs
- Defines success criteria and constraints
- Creates PRD (Product Requirements Document)
- **Handoff Artifacts:** PRD, user stories, success metrics

**Architect Phase:**
- Reviews PRD and technical constraints
- Designs system architecture and component boundaries
- Defines interfaces and integration patterns
- **Handoff Artifacts:** Architecture design, API contracts, technology decisions

**Developer Phase:**
- Reviews architecture and PRD
- Implements according to design
- Flags issues or improvements needed
- **Feedback Loop:** Can request clarifications from PM or Architect

**Use Cases:**
- New feature development
- System integrations
- Major refactoring projects

### Pattern 2: Investigation → Analysis → Fix
**Flow:** QA Engineer / Deep Investigator → Backend Developer → QA Engineer

**QA/Investigator Phase:**
- Reproduces issue and gathers evidence
- Identifies root cause and impact
- Creates bug report with reproduction steps
- **Handoff Artifacts:** Bug report, reproduction steps, root cause analysis

**Developer Phase:**
- Reviews bug report and root cause
- Implements fix addressing root cause
- Adds regression tests
- **Handoff Artifacts:** Fix implementation, test coverage

**QA Phase (Verification):**
- Verifies fix resolves original issue
- Tests for regressions
- Validates in production-like environment
- **Feedback Loop:** Can request fix adjustments if issues found

**Use Cases:**
- Bug investigation and fixes
- Production incidents
- Security vulnerabilities

### Pattern 3: Design → Review → Implementation
**Flow:** Architect → Code Reviewer → Developer

**Architect Phase:**
- Creates architectural design
- Defines component boundaries and contracts
- Documents key decisions and trade-offs
- **Handoff Artifacts:** Architecture design, decision records

**Code Reviewer Phase:**
- Reviews design for feasibility and quality
- Identifies potential issues or improvements
- Validates alignment with existing patterns
- **Handoff Artifacts:** Review feedback, approved design

**Developer Phase:**
- Implements according to reviewed design
- Requests clarification if design is unclear
- Flags implementation challenges
- **Feedback Loop:** Can propose design changes if implementation reveals issues

**Use Cases:**
- Architecture reviews
- Design decisions
- Technical planning

### Pattern 4: Multi-Role Feature Development
**Flow:** Product Manager → Architect → Frontend Developer + Backend Developer → QA Engineer

**Product Manager Phase:**
- Defines feature requirements and user flows
- **Handoff:** PRD to Architect

**Architect Phase:**
- Designs system architecture
- Defines API contracts between frontend/backend
- **Handoff:** Architecture + API specs to Developers

**Frontend + Backend Developers (Parallel):**
- Frontend: Implements UI according to design
- Backend: Implements API according to contracts
- Coordinate on API integration and edge cases
- **Handoff:** Implemented feature to QA

**QA Engineer Phase:**
- Tests end-to-end user flows
- Validates feature meets requirements
- **Feedback Loop:** Reports issues back to developers

**Use Cases:**
- Full-stack feature development
- User-facing features with backend APIs

## HANDOFF TEMPLATES

### Product Manager → Architect
```markdown
## PRD Summary
- Feature: [description]
- User Goals: [what users need]
- Success Criteria: [how we measure success]
- Constraints: [technical/business limits]
- Questions for Architecture: [what needs architectural decisions]
```

### Architect → Developer
```markdown
## Architecture Summary
- Components: [what needs to be built]
- Interfaces: [how components connect]
- Data Flow: [how data moves through system]
- Key Decisions: [important choices and rationale]
- Implementation Notes: [guidance for developers]
```

### Developer → QA/Reviewer
```markdown
## Implementation Summary
- What Changed: [files/components modified]
- How It Works: [brief explanation]
- Testing: [what was tested]
- Known Issues: [any limitations or concerns]
- Review Focus: [what to pay attention to]
```

## COLLABORATION BEST PRACTICES

**For Handoffs:**
- Include all context needed for next role
- Highlight any assumptions or open questions
- Provide clear artifacts (documents, diagrams, code)
- Set expectations for what comes next

**For Parallel Work:**
- Share progress regularly
- Coordinate on shared interfaces/contracts
- Flag blockers or dependencies early
- Align on timelines and priorities

**For Feedback Loops:**
- Be specific about what needs clarification
- Provide context for why clarification is needed
- Suggest alternatives when proposing changes
- Keep feedback constructive and actionable

## SCALE-ADAPTIVE COLLABORATION

**Simple Tasks:**
- Single role can handle entire workflow
- Minimal handoffs and coordination needed
- Quick iteration and feedback

**Medium Tasks:**
- 2-3 roles collaborate sequentially
- Clear handoffs with artifacts
- Some parallel work possible

**Complex Tasks:**
- Multiple roles with structured workflow
- Formal handoffs with review gates
- Parallel work with coordination points
- Iterative refinement across phases

