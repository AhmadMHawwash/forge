# BUG FIX VERIFICATION

## ROLE
Validate bug fix completeness. Use after `goals/bug-investigation.md`.

## ROOT CAUSE
- [ ] Root cause identified (not symptom)
- [ ] Documented: What → Why → Fix

## FIX PROOF
- [ ] Original repro steps no longer trigger bug
- [ ] Verified in same environment/data
```
Before: [Step] → [Bug] ❌
After:  [Step] → [Expected] ✅
```

## REGRESSION GUARD
- [ ] New test captures exact bug conditions
- [ ] Test FAILs without fix, PASSes with
- [ ] All existing tests pass
```bash
[test command] → [output]
```

## SIDE EFFECTS
- [ ] Related features verified
- [ ] No new breakage

## EDGE CASES
- [ ] Similar scenarios checked
- [ ] Boundaries: null, max, concurrent, error

## CODE QUALITY
- [ ] Minimal, focused fix
- [ ] Follows patterns
- [ ] No new debt
- [ ] Understandable

## DOCS
- [ ] Ticket updated with RCA
- [ ] Comments if non-obvious

## PRODUCTION (if applicable)
- [ ] Metrics confirm fix
- [ ] Alerts updated

---

## SUMMARY
**Status:** ⬜ Fixed / ⬜ Needs Work

**Confidence:**
- [ ] HIGH: Root cause proven, comprehensive tests
- [ ] MEDIUM: Fix works, basic tests
- [ ] LOW: Symptom addressed, needs investigation

**Evidence:** [Before/after, test output, logs]
