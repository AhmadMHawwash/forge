# Bug Fix Verification Checklist

Use after completing work with `goals/bug-investigation.md` to verify the bug is properly fixed.

## ✅ Root Cause Verification

**Understanding:**
- [ ] Root cause is clearly identified
- [ ] Root cause (not just symptom) is addressed
- [ ] Explanation of why the bug occurred is documented

**Root cause documentation:**
```
What: [What was happening]
Why: [Why it was happening - the actual root cause]
Fix: [How the fix addresses the root cause]
```

## ✅ Fix Verification

**Bug is fixed:**
- [ ] Original reproduction steps no longer reproduce the bug
- [ ] Fix has been verified in the same environment where bug occurred
- [ ] Fix works with the same data that triggered the bug

**Reproduction test:**
```
Before fix:
1. [Step] → [Bug behavior]

After fix:
1. [Step] → [Expected behavior] ✅
```

## ✅ Regression Prevention

**New tests added:**
- [ ] Unit test specifically for this bug scenario
- [ ] Integration test if cross-component
- [ ] Test captures the exact conditions that caused the bug

**Test verification:**
```bash
# Run the new test(s)
[test command]

# Should FAIL with bug present, PASS with fix
# Actual output: [paste]
```

## ✅ Side Effect Analysis

**Impact assessment:**
- [ ] Fix doesn't break other functionality
- [ ] Related features still work correctly
- [ ] All existing tests pass

**Areas checked:**
- [ ] [Related area 1]: [Status]
- [ ] [Related area 2]: [Status]

**Regression test results:**
```bash
# Full test suite
[test command]

# Output: [paste or summarize]
```

## ✅ Edge Cases

**Similar scenarios:**
- [ ] Similar edge cases checked and don't have the same bug
- [ ] Edge cases added to test suite
- [ ] Boundary conditions tested

**Edge case checklist:**
- [ ] Empty/null inputs
- [ ] Maximum values
- [ ] Concurrent access (if applicable)
- [ ] Error conditions
- [ ] [Domain-specific edge case]

## ✅ Code Quality

**Fix quality:**
- [ ] Fix is minimal and focused (not over-engineered)
- [ ] Fix follows existing code patterns
- [ ] No new technical debt introduced
- [ ] Fix is understandable without deep context

**Code review readiness:**
- [ ] Changes are well-scoped and reviewable
- [ ] Commit message explains what and why
- [ ] PR description includes bug context

## ✅ Documentation

**Knowledge capture:**
- [ ] Bug ticket updated with root cause analysis
- [ ] Comments added if fix is non-obvious
- [ ] Known issues doc updated (if applicable)

## ✅ Monitoring (Production Bugs)

**For production bugs:**
- [ ] Metrics/logs confirm fix is working in production
- [ ] Alerting updated to catch recurrence
- [ ] Runbook updated (if applicable)

## Verification Summary

**Bug Status:** ⬜ Fixed / ⬜ Needs More Work

**Verification Checklist:** ___/___

**Confidence Level:** 
- [ ] High - Root cause proven, comprehensive tests, no side effects
- [ ] Medium - Fix works, basic tests, some uncertainty
- [ ] Low - Symptom addressed, needs more investigation

**Evidence:**
- Before/after comparison: [describe or link]
- Test output: [paste]
- Logs/metrics: [if applicable]

**Outstanding Concerns:**
1. [Any remaining uncertainty]
