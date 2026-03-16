# FEATURE VERIFICATION

**Triggers:** verify feature, acceptance test, feature done, ship check  
**Use after:** `feature-request` goal completion

## ACCEPTANCE CRITERIA

- [ ] All user stories have passing acceptance tests
- [ ] Definition of Done met (as stated in spec)
- [ ] Edge cases handled (empty state, error state, loading state)
- [ ] No hardcoded values that should be configurable

## INTEGRATION

- [ ] No regressions in existing tests
- [ ] New tests cover happy path AND error paths
- [ ] API contracts match spec (request/response shapes)
- [ ] Database migrations are reversible
- [ ] Feature flag in place (if applicable)

## USER EXPERIENCE

- [ ] Works on target devices/browsers
- [ ] Loading states provide feedback
- [ ] Error messages are actionable (user knows what to do)
- [ ] Accessibility: keyboard navigation, screen reader, contrast

## OPERATIONAL

- [ ] Logging covers success AND failure paths
- [ ] Metrics/analytics events fire correctly
- [ ] Performance within acceptable bounds (measured, not assumed)
- [ ] Rollback plan documented

## FINAL CHECK

- [ ] PR description explains *why*, not just *what*
- [ ] No TODO comments left in code
- [ ] No console.log / print statements in production code
- [ ] Dependencies are pinned to specific versions
