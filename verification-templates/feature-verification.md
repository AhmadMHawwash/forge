# Feature Verification Checklist

Use after completing work with `goals/feature-request.md` to verify the feature is ready.

## ✅ Requirements Verification

**Functional Requirements:**
- [ ] All acceptance criteria from the spec/story are met
- [ ] Feature works as described in requirements
- [ ] All user flows work end-to-end

**Evidence required:**
```
[ ] Acceptance criterion 1: [PASS/FAIL] - [Evidence]
[ ] Acceptance criterion 2: [PASS/FAIL] - [Evidence]
...
```

## ✅ Code Quality

**Implementation:**
- [ ] Code follows existing patterns and conventions
- [ ] No obvious code smells or anti-patterns
- [ ] Error handling is comprehensive
- [ ] Logging/observability added where appropriate

**Clean code checklist:**
- [ ] Functions are focused and reasonably sized
- [ ] Naming is clear and consistent
- [ ] No dead code or commented-out blocks
- [ ] Dependencies are appropriate (no unnecessary additions)

## ✅ Testing

**Test coverage:**
- [ ] Unit tests cover core logic
- [ ] Integration tests cover key workflows
- [ ] Edge cases are tested
- [ ] Error scenarios are tested

**Test execution:**
```bash
# Capture and include test output
npm test  # or equivalent

# Expected: All tests passing
# Actual: [paste output]
```

**Manual testing:**
- [ ] Tested with realistic data
- [ ] Tested error scenarios manually
- [ ] Tested in environment similar to production

## ✅ Integration

**System integration:**
- [ ] Doesn't break existing functionality
- [ ] API contracts are maintained (if applicable)
- [ ] Database migrations work (if applicable)
- [ ] External service integrations work

**Regression check:**
- [ ] Existing tests still pass
- [ ] Related features still work
- [ ] No unintended side effects observed

## ✅ Non-Functional Requirements

**Performance:**
- [ ] Meets performance expectations (if specified)
- [ ] No obvious performance regressions
- [ ] Database queries are efficient (if applicable)

**Security:**
- [ ] Input validation in place
- [ ] Authentication/authorization respected
- [ ] No sensitive data exposed
- [ ] Injection vulnerabilities addressed

**Accessibility (if user-facing):**
- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] Color contrast sufficient

## ✅ Documentation

**Code documentation:**
- [ ] Complex logic is commented
- [ ] Public APIs/functions are documented
- [ ] README updated if needed

**External documentation:**
- [ ] User-facing docs updated (if applicable)
- [ ] API docs updated (if applicable)
- [ ] Changelog entry added (if applicable)

## ✅ Deployment Readiness

**Release preparation:**
- [ ] Feature flag configured (if applicable)
- [ ] Rollback plan identified
- [ ] Monitoring/alerts in place (if applicable)
- [ ] Database migrations are reversible (if applicable)

## Verification Summary

**Overall Status:** ⬜ Ready / ⬜ Needs Work

**Completed Checkpoints:** ___/___

**Remaining Issues:**
1. [Issue and required action]
2. [Issue and required action]

**Evidence Compilation:**
- Test results: [link or paste]
- Screenshots: [if applicable]
- Performance metrics: [if applicable]
