# BUG VERIFICATION

**Triggers:** verify fix, bug fixed, regression check  
**Use after:** `bug-investigation` goal completion

## ROOT CAUSE

- [ ] Root cause identified and documented (not just the symptom)
- [ ] Root cause confirmed with evidence (logs, traces, reproduction)
- [ ] Fix addresses root cause, not a workaround

## REGRESSION PREVENTION

- [ ] Test added that reproduces the original bug
- [ ] Test fails without the fix, passes with the fix
- [ ] Related edge cases covered by additional tests
- [ ] Existing test suite still passes

## BLAST RADIUS

- [ ] Fix doesn't break adjacent functionality
- [ ] Fix doesn't change public API contracts unintentionally
- [ ] Fix doesn't introduce performance regression
- [ ] Fix works with existing data (not just new data)

## SYSTEMIC

- [ ] Could this same bug class exist elsewhere? Checked.
- [ ] Root cause points to a process gap? Documented for retro.
- [ ] Monitoring/alerting added to catch recurrence early

## FINAL CHECK

- [ ] Reproduction steps from the bug report now produce correct behavior
- [ ] Fix tested in environment matching production (not just local)
- [ ] PR links to the original issue/ticket
