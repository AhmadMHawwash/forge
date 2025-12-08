# Specification Verification Checklist

Use after completing work with `goals/specification.md` to verify the specification is complete and ready for implementation.

## ✅ Problem Clarity

**Problem statement:**
- [ ] Problem is clearly articulated
- [ ] Target users are identified
- [ ] Impact/value is explained
- [ ] Context is sufficient

**Clarity test:** Can someone unfamiliar with the project understand what we're solving?

## ✅ Requirements Completeness

**Functional requirements:**
- [ ] All user stories have acceptance criteria
- [ ] Acceptance criteria are testable (not vague)
- [ ] All key workflows are documented
- [ ] Happy path is clear

**Non-functional requirements:**
- [ ] Performance expectations specified (if relevant)
- [ ] Security requirements documented
- [ ] Scalability considerations (if relevant)
- [ ] Accessibility requirements (if user-facing)

**Gaps check:**
- [ ] No "TBD" or placeholder sections
- [ ] Open questions are answered or explicitly flagged
- [ ] Assumptions are documented

## ✅ Scope Definition

**In scope:**
- [ ] What's included is clearly listed
- [ ] Boundaries are well-defined

**Out of scope:**
- [ ] What's NOT included is explicitly stated
- [ ] Future considerations are documented separately
- [ ] Scope creep prevention is clear

## ✅ Testability

**Every requirement is testable:**
- [ ] Can write a test for each acceptance criterion
- [ ] Success/failure conditions are measurable
- [ ] No subjective criteria ("should be fast", "user-friendly")

**Test transformation:**
```
❌ "System should be responsive"
✅ "Page load time < 2 seconds at 95th percentile"

❌ "Easy to use"
✅ "User can complete [task] in < 5 clicks"
```

## ✅ Edge Cases

**Edge cases documented:**
- [ ] Error scenarios defined
- [ ] Boundary conditions specified
- [ ] Empty/null states addressed
- [ ] Concurrent access scenarios (if applicable)

## ✅ Technical Feasibility

**Implementation viability:**
- [ ] Technical approach is realistic
- [ ] Dependencies are identified
- [ ] Constraints are acknowledged
- [ ] Risks are documented with mitigations

**Architecture alignment:**
- [ ] Fits existing system architecture
- [ ] Integration points defined
- [ ] Data model impacts understood

## ✅ Clarity for Implementation

**Developer readiness test:**
- [ ] Developer can implement without major clarifications
- [ ] No ambiguous terms or undefined concepts
- [ ] Examples provided for complex requirements

**Ambiguity check:**
Questions a developer shouldn't have to ask:
- [ ] "What should happen when X?"
- [ ] "Is Y in scope or not?"
- [ ] "How do we handle Z?"

## ✅ Consistency

**Internal consistency:**
- [ ] No contradicting requirements
- [ ] Terminology is consistent throughout
- [ ] Referenced components/terms are defined

**External consistency:**
- [ ] Aligns with existing system behavior
- [ ] Matches user expectations
- [ ] Compatible with technical constraints

## ✅ Stakeholder Alignment

**Review status:**
- [ ] Key stakeholders have reviewed
- [ ] Concerns have been addressed
- [ ] Approval obtained (if required)

## Verification Summary

**Spec Status:** ⬜ Ready for Implementation / ⬜ Needs Refinement

**Completeness Score:** ___/___

**Gaps Identified:**
1. [Gap]: [Required action]

**Ambiguities Remaining:**
1. [Unclear area]: [Question to resolve]

**Implementability Assessment:**
- [ ] High - Comprehensive, clear, ready to build
- [ ] Medium - Mostly complete, minor clarifications needed
- [ ] Low - Significant gaps, not ready for implementation

**Sign-off:**
- [ ] Author confirms spec is complete
- [ ] Technical reviewer confirms feasibility
- [ ] Product owner confirms requirements
