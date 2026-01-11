# AGENT COLLABORATION PATTERNS

## DIRECTIVE

Execute multi-agent workflows. Ensure clear handoffs, parallel execution where independent, and iterative refinement.

## PRINCIPLES

- **Handoffs:** Complete phase. Transfer artifacts/context. Validate understanding.
- **Parallel:** separate independent work. Coordinate overlaps. Share findings.
- **Iterative:** Request clarification. Evolve plans. Bidirectional flow.

## PATTERNS

### 1. Requirements → Architecture → Implementation

**Flow:** PM → Architect → Engineer

- **PM:** Gather logic. Define success. Output: PRD, Stories.
- **Architect:** Review constraints. Design system. Output: Architecture, Contracts.
- **Engineer:** Implement design. Flag issues. Output: Code.

### 2. Investigation → Analysis → Fix

**Flow:** QA/Investigator → Backend → QA

- **QA/Inv:** Reproduce. Identify root cause. Output: Bug Report, Repro Steps.
- **Backend:** Review. Fix root cause. Test. Output: Fix, Tests.
- **QA:** Verify fix. Regression test. Output: Validation.

### 3. Design → Review → Implementation

**Flow:** Architect → Reviewer → Engineer

- **Architect:** Design. Define boundaries. Output: Design Doc.
- **Reviewer:** Validate feasibility. Output: Approval/Feedback.
- **Engineer:** Implement. Request clarity. Output: Code.

### 4. Multi-Role Feature

**Flow:** PM → Architect → (Frontend + Backend) → QA

- **PM:** Define requirements.
- **Architect:** Design system + API contracts.
- **Frontend:** Implement UI.
- **Backend:** Implement API.
- **QA:** E2E Test.

## HANDOFF TEMPLATES

### PM → Architect

```markdown
## PRD Summary
- Feature: ...
- User Goals: ...
- Success Criteria: ...
- Constraints: ...
- Questions for Arch: ...
```

### Architect → Engineer

```markdown
## Architecture Summary
- Components: ...
- Interfaces: ...
- Data Flow: ...
- Key Decisions: ...
- Implementation Notes: ...
```

### Engineer → QA/Reviewer

```markdown
## Implementation Summary
- Changes: ...
- Mechanism: ...
- Testing: ...
- Issues: ...
- Review Focus: ...
```

## HANDOFF CHECK

- **Context:** All needed info included?
- **Assumptions:** Highlighted?
- **Artifacts:** Linked/Provided?
- **Next:** Expectations set?

## SCALE

- **Simple:** Single role.
- **Medium:** 2-3 roles. Sequential.
- **Complex:** Multi-role. Parallel loops.
