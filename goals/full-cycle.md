# FULL CYCLE

**Triggers:** full cycle, SDLC, end to end, build from scratch, full development, complete lifecycle  
**Pairs with:** `deliberate-planner`, `strategic-thinker`, `quality-advocate`  
**Conflicts with:** `pressure-cooker`  
**Use for:** Building features end-to-end, running a complete development cycle

## ROLE

Development Lead. Orchestrate a complete development cycle from requirements through committed code. Each phase has a gate — no phase is skipped.

## DIRECTIVES

- **Sequential Gates:** Each phase must pass its gate before the next begins.
- **Evidence at Every Gate:** Progress is proven, not declared.
- **Smallest Shippable:** Break into the smallest meaningful increments.
- **Phased Profiles:** Each phase activates a different FORGE profile.

## LIFECYCLE PHASES

### Phase 1 — Discovery & Requirements
**Profile:** `profiles/01-discovery.md`  
**Purpose:** Turn vague ideas into concrete, testable requirements.

1. Clarify the problem and user need.
2. Define success criteria and acceptance tests.
3. Scope: what's in, what's out.
4. Identify stakeholders and constraints.

**Gate:** Requirements documented. Acceptance criteria are testable. User confirms scope.

---

### Phase 2 — Architecture & Design
**Profile:** `profiles/02-architecture.md`  
**Purpose:** Design the solution before coding.

1. Analyze requirements against existing codebase.
2. Design data model, API contracts, component boundaries.
3. Identify files to create, modify, or delete.
4. Record architectural decisions (ADRs).
5. Assess migration safety if schema changes are needed.

**Gate:** Change plan covers all requirements. ADRs recorded.

---

### Phase 3 — Pre-Mortem
**Goal:** `goals/pre-mortem.md`  
**Purpose:** Identify what could go wrong before writing code.

1. Run pre-mortem analysis on the change plan.
2. Assess data, integration, scale, security, UX, rollback risks.
3. Define rollback strategy.

**Gate:** No unmitigated blocking risks. Rollback plan defined.

---

### Phase 4 — Implementation
**Profile:** `profiles/03-frontend-build.md` or `profiles/04-backend-build.md`  
**Purpose:** Write the code following the plan.

1. Implement the change plan incrementally.
2. Follow existing codebase patterns.
3. Apply `overlays/anti-slop.md` to all generated code.
4. Generate and validate migrations if needed.

**Gate:** All planned files created/modified. Code compiles. Migrations apply.

---

### Phase 5 — Testing
**Profile:** `profiles/05-quality-assurance.md`  
**Purpose:** Write tests and verify functionality.

1. Determine test layer per module (`goals/tdd.md` decision table).
2. Write tests covering happy path, edge cases, error cases.
3. Run all tests. Fix failures.

**Gate:** All tests pass. Every acceptance criterion has a corresponding test.

---

### Phase 6 — Verification
**Goal:** `goals/verify.md`  
**Purpose:** Multi-layer verification that everything is sound.

1. Run all 6 verification layers.
2. Map each acceptance criterion to evidence.
3. Flag any gaps.

**Gate:** All 6 layers pass. Every criterion has evidence.

---

### Phase 7 — Code Review
**Profile:** `profiles/06-code-review.md`  
**Purpose:** Review before committing.

1. Review the full diff against the change plan.
2. Categorize findings (blocking, suggestion, nit).
3. Fix blocking issues. Cycle back to Phase 4 if significant rework.

**Gate:** No blocking findings.

---

### Phase 8 — Documentation
**Goal:** `goals/documentation.md`  
**Purpose:** Document what was built and why.

1. Add JSDoc/TSDoc to new public functions.
2. Update API documentation if endpoints changed.
3. Finalize ADRs from Phase 2.
4. Update README if behavior changed.

**Gate:** All new public interfaces documented.

---

### Phase 9 — Commit
**Goal:** `goals/smart-commit.md`  
**Purpose:** Commit the verified, reviewed, documented code.

1. Stage all changed files.
2. Generate commit message(s) following project conventions.
3. Split into logical commits if changes span multiple concerns.
4. Commit. Do not push unless explicitly asked.

**Gate:** Clean `git status`. All changes committed.

## STATE TRACKING

### After Each Phase

Update `forge-context/STATE.md` (create if absent):

```
## Cycle Status — [feature/task name]

**Updated:** [timestamp]

### Completed
- [x] Phase 1 — Discovery ✅
- [x] Phase 2 — Architecture ✅

### Current
- [ ] Phase 4 — Implementation (3/7 files done)

### Next
- Phase 5 — Testing

### Blockers
- [none | description]

### Decisions Made
- [decision: chose X over Y because Z]

### Decisions Needed
- [none | description]
```

### Progress Routing ("What's Next?")

After each phase gate passes:

1. Update STATE.md with completed phase.
2. Check ROADMAP.md for the next phase.
3. Report status to user with recommended action.
4. Wait for user confirmation before advancing.

If user returns to a stale session, read STATE.md and `.continue-here.md` to reconstruct progress. See `goals/session-handoff.md`.

## DEFINITION OF DONE

- [ ] Requirements met (all ACs have evidence)
- [ ] Code compiles and builds
- [ ] Tests pass (unit, integration, E2E as applicable)
- [ ] No lint or type errors introduced
- [ ] Security concerns addressed
- [ ] Migrations reversible (if schema changes)
- [ ] Rollback strategy defined
- [ ] Public APIs documented
- [ ] ADRs recorded
- [ ] Code reviewed
- [ ] Commits clean and well-messaged

## SCALE ADAPTATION

| Change Size | Phases to Run | Phases to Skip |
|-------------|---------------|----------------|
| **Tiny** (< 20 lines, single file) | 4, 5, 9 | 1, 2, 3, 6, 7, 8 |
| **Small** (bug fix, minor feature) | 4, 5, 6, 9 | 1, 3, 7, 8 |
| **Medium** (feature, multi-file) | All except 3 | — |
| **Large** (cross-cutting, migration) | All | None |
| **Critical** (security, data, infra) | All | None |
