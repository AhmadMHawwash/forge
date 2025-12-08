# Code Review Verification Checklist

Use after completing work with `goals/code-review.md` to verify the review is thorough.

## ✅ Review Completeness

**All code examined:**
- [ ] All changed files reviewed
- [ ] All functions/methods understood
- [ ] Test changes reviewed alongside implementation

**Understanding:**
- [ ] Purpose of the change is clear
- [ ] How it works is understood
- [ ] Why decisions were made is clear (or asked about)

## ✅ Correctness

**Logic review:**
- [ ] Code does what it claims to do
- [ ] Edge cases are handled
- [ ] Error conditions are handled properly
- [ ] No obvious logic errors

**Red flags checked:**
- [ ] No off-by-one errors
- [ ] Null/undefined handling
- [ ] Boundary conditions
- [ ] Race conditions (if concurrent)
- [ ] Resource leaks (connections, memory, files)

## ✅ Quality Assessment

**Code quality:**
- [ ] Code is readable and understandable
- [ ] Naming is clear and consistent
- [ ] Functions are appropriately sized
- [ ] No unnecessary complexity

**Patterns:**
- [ ] Follows existing codebase patterns
- [ ] Consistent with team conventions
- [ ] No anti-patterns introduced

**Technical debt:**
- [ ] Doesn't add significant technical debt
- [ ] Any intentional shortcuts are documented
- [ ] TODO/FIXME comments are tracked

## ✅ Testing Assessment

**Test quality:**
- [ ] Tests actually verify the behavior
- [ ] Tests cover the important paths
- [ ] Tests aren't too brittle or too loose
- [ ] Edge cases are tested

**Coverage:**
- [ ] New code has appropriate test coverage
- [ ] Changed code maintains test coverage
- [ ] Integration tests where appropriate

## ✅ Security Review

**Security checklist:**
- [ ] Input validation is present
- [ ] No injection vulnerabilities (SQL, XSS, etc.)
- [ ] Authentication/authorization respected
- [ ] Sensitive data handled appropriately
- [ ] No secrets in code

## ✅ Performance Considerations

**Performance review:**
- [ ] No obvious performance issues
- [ ] Database queries are efficient (if applicable)
- [ ] No N+1 queries
- [ ] Caching considered where appropriate

## ✅ Feedback Delivery

**Feedback provided:**
- [ ] Comments are constructive and actionable
- [ ] Blocking issues clearly marked
- [ ] Suggestions vs requirements distinguished
- [ ] Positive feedback included where warranted

**Feedback categories used:**
- 🔴 **Blocking**: Must fix before merge
- 🟡 **Suggestion**: Should consider, discuss
- 🟢 **Nitpick**: Optional improvement
- 💡 **Question**: Need clarification

## ✅ Review Documentation

**Review record:**
- [ ] All comments documented in PR/review system
- [ ] Approval/rejection clearly stated
- [ ] Follow-up items tracked

## Review Summary

**Review Status:** ⬜ Approved / ⬜ Changes Requested / ⬜ Needs Discussion

**Key Findings:**

| Type | Count |
|------|-------|
| 🔴 Blocking | ___ |
| 🟡 Suggestions | ___ |
| 🟢 Nitpicks | ___ |
| 💡 Questions | ___ |

**Blocking Issues:**
1. [Issue]: [Required action]

**Main Suggestions:**
1. [Suggestion]: [Rationale]

**Overall Assessment:**
[2-3 sentences on overall code quality and readiness]
