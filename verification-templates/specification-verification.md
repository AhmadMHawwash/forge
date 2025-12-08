# SPECIFICATION VERIFICATION

## ROLE
Validate spec completeness. Use after `goals/specification.md`.

## PROBLEM CLARITY
- [ ] Problem clearly articulated
- [ ] Target users identified
- [ ] Impact/value explained
- [ ] Context sufficient

> **Test:** Can someone unfamiliar understand what we're solving?

## REQUIREMENTS

### Functional
- [ ] All stories have testable acceptance criteria
- [ ] Key workflows documented
- [ ] Happy path clear

### Non-Functional
- [ ] Performance expectations (if relevant)
- [ ] Security requirements
- [ ] Scalability considerations
- [ ] Accessibility (if user-facing)

### Gaps
- [ ] No TBD/placeholders
- [ ] Open questions resolved or flagged
- [ ] Assumptions documented

## SCOPE
- [ ] In-scope clearly listed
- [ ] Out-of-scope explicitly stated
- [ ] Future work separated

## TESTABILITY
- [ ] Every requirement testable
- [ ] No subjective criteria

```
❌ "Should be responsive"
✅ "Page load < 2s at p95"

❌ "Easy to use"
✅ "Complete [task] in < 5 clicks"
```

## EDGE CASES
- [ ] Error scenarios defined
- [ ] Boundaries specified
- [ ] Empty/null states addressed
- [ ] Concurrency (if applicable)

## FEASIBILITY
- [ ] Approach realistic
- [ ] Dependencies identified
- [ ] Constraints acknowledged
- [ ] Risks + mitigations documented
- [ ] Fits architecture
- [ ] Integration points defined

## CLARITY FOR DEVS
- [ ] Implementable without major clarifications
- [ ] No ambiguous terms
- [ ] Examples for complex requirements

> **Test:** Will devs ask "What happens when X?" or "Is Y in scope?"

## CONSISTENCY
- [ ] No contradictions
- [ ] Terminology consistent
- [ ] Aligns with existing system
- [ ] Matches user expectations

## STAKEHOLDER SIGN-OFF
- [ ] Key stakeholders reviewed
- [ ] Concerns addressed
- [ ] Approval obtained

---

## SUMMARY
**Status:** ⬜ Ready for Implementation / ⬜ Needs Refinement

**Gaps:** [Gap] → [Action]

**Ambiguities:** [Unclear] → [Question]

**Implementability:**
- [ ] HIGH: Comprehensive, ready
- [ ] MEDIUM: Minor clarifications
- [ ] LOW: Not ready

**Sign-off:**
- [ ] Author
- [ ] Technical Reviewer
- [ ] Product Owner
