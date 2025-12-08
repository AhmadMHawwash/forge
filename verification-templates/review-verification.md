# CODE REVIEW VERIFICATION

## ROLE
Validate review thoroughness. Use after `goals/code-review.md`.

## COMPLETENESS
- [ ] All changed files reviewed
- [ ] Tests reviewed with implementation
- [ ] Purpose + mechanism understood

## CORRECTNESS
- [ ] Code does what it claims
- [ ] Edge cases handled
- [ ] Errors handled properly

### Red Flags Checked
- [ ] Off-by-one
- [ ] Null/undefined
- [ ] Boundaries
- [ ] Race conditions
- [ ] Resource leaks

## QUALITY
- [ ] Readable, understandable
- [ ] Clear naming
- [ ] Appropriate function size
- [ ] No unnecessary complexity
- [ ] Follows patterns
- [ ] No anti-patterns
- [ ] No new tech debt (or documented)

## TESTS
- [ ] Tests verify behavior
- [ ] Important paths covered
- [ ] Not brittle, not loose
- [ ] Edge cases tested
- [ ] Coverage maintained

## SECURITY
- [ ] Input validated
- [ ] No injection vulns
- [ ] Auth respected
- [ ] Secrets not in code

## PERFORMANCE
- [ ] No obvious issues
- [ ] Queries efficient
- [ ] No N+1
- [ ] Caching considered

## FEEDBACK
- [ ] Comments constructive + actionable
- [ ] Blockers marked
- [ ] Suggestions vs requirements clear

### Feedback Legend
- 🔴 **Blocking**: Must fix
- 🟡 **Suggestion**: Discuss
- 🟢 **Nitpick**: Optional
- 💡 **Question**: Clarify

---

## SUMMARY
**Status:** ⬜ Approved / ⬜ Changes Requested / ⬜ Needs Discussion

| Type | Count |
|------|-------|
| 🔴 Blocking | ___ |
| 🟡 Suggestions | ___ |
| 🟢 Nitpicks | ___ |
| 💡 Questions | ___ |

**Blocking:** [Issue] → [Action]

**Assessment:** [2-3 sentences on quality/readiness]
