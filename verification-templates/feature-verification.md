# FEATURE VERIFICATION

## ROLE
Validate feature readiness. Use after `goals/feature-request.md`.

## REQUIREMENTS
- [ ] All acceptance criteria met
- [ ] All user flows work E2E
```
[Criterion 1]: [PASS/FAIL] - [Evidence]
[Criterion 2]: [PASS/FAIL] - [Evidence]
```

## CODE QUALITY
- [ ] Follows patterns/conventions
- [ ] No code smells
- [ ] Error handling comprehensive
- [ ] Logging added
- [ ] Functions focused, well-named
- [ ] No dead code

## TESTING
- [ ] Unit: Core logic covered
- [ ] Integration: Key workflows
- [ ] Edge cases + error scenarios
```bash
[test command] → [output]
```
- [ ] Manual: Realistic data, error scenarios

## INTEGRATION
- [ ] Existing functionality intact
- [ ] API contracts maintained
- [ ] Migrations work (if applicable)
- [ ] External services work

## NON-FUNCTIONAL

### Performance
- [ ] Meets expectations
- [ ] No regressions
- [ ] Queries efficient

### Security
- [ ] Input validated
- [ ] Auth respected
- [ ] No data exposure
- [ ] No injections

### Accessibility (user-facing)
- [ ] Keyboard nav
- [ ] Screen reader
- [ ] Color contrast

## DOCS
- [ ] Complex logic commented
- [ ] APIs documented
- [ ] README/Changelog updated

## DEPLOY READY
- [ ] Feature flag configured
- [ ] Rollback plan exists
- [ ] Monitoring in place

---

## SUMMARY
**Status:** ⬜ Ready / ⬜ Needs Work

**Issues:**
1. [Issue] → [Action]

**Evidence:** [Tests, screenshots, metrics]
