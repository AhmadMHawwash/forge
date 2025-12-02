# FEATURE DEVELOPMENT

Build new features systematically using a two-phase workflow: Planning Phase (understand and design) followed by Execution Phase (build and verify).

## TWO-PHASE WORKFLOW

### 📋 PHASE 1: PLANNING
**Purpose:** Understand requirements, design solution, and create implementation plan before coding.

#### 1. UNDERSTAND
**Before writing any code:**
- Read and understand the requirements
- Look at existing code patterns and architecture
- Ask questions if anything is unclear
- Identify potential risks or complications

**Key questions:**
- What problem does this solve for users?
- How should this work from a user perspective?
- What existing code or patterns can I build on?
- What could go wrong or be complicated?

**Scale-Adaptive Depth:**
- **Simple features:** Quick understanding check, identify 2-3 key components
- **Medium features:** Map user flows, identify affected systems, list dependencies
- **Complex features:** Full requirements analysis, stakeholder perspectives, risk assessment, architectural impact

#### 2. PLAN
**Design the solution:**
- Break down the feature into logical components
- Plan the data model and API changes needed
- Consider testing strategy for the functionality
- Identify any dependencies or integration points

**For complex features (Least-to-Most approach):**

1. Identify the simplest, most basic version that provides value
2. Design that minimal version first
3. Layer on additional complexity incrementally
4. Each layer builds on the validated previous layer

**Document your approach:**
- What components or files need to be created/modified
- How data will flow through the system
- What testing will validate the feature works
- What could be risky or require extra attention

**Planning Artifacts:**
- Component breakdown and responsibilities
- Data flow diagrams or descriptions
- API contracts or interface specifications
- Testing strategy and key scenarios
- Risk assessment and mitigation plans

**Phase Gate:** Present plan for review/approval before proceeding to execution (especially for complex features)

### 🚀 PHASE 2: EXECUTION
**Purpose:** Implement the planned solution incrementally with continuous validation.

#### 3. BUILD
**Implement incrementally:**
- Start with the core functionality
- Write tests as you implement features
- Follow existing code patterns and conventions
- Test functionality as you build it

**Quality practices:**
- Make small, focused changes that can be easily reviewed
- Include error handling and edge case considerations
- Write clear commit messages explaining what and why
- Test the feature works in realistic scenarios

**Incremental Delivery:**
- Build smallest working version first
- Add complexity layer by layer
- Validate each increment before proceeding
- Keep implementation aligned with plan (or update plan if needed)

#### 4. VERIFY
**Validate the solution:**
- Test the feature with realistic data and usage
- Verify it meets the original requirements
- Check that existing functionality still works
- Consider user experience and edge cases

**Before considering it complete:**
- All requirements are satisfied
- Tests pass and cover important functionality
- Code follows project conventions
- Documentation is updated if needed

**Verification Gates:**
- ✅ Functionality: Works as specified?
- ✅ Testing: Tests run, output captured?
- ✅ Edge Cases: Realistic data tested?
- ✅ Integration: Doesn't break existing functionality?
- ✅ Evidence: Proof provided for all claims?

## PHASE TRANSITIONS

**Planning → Execution:**
- Present plan summary and get approval (for complex features)
- Confirm understanding of requirements
- Identify any blockers or dependencies
- Set expectations for delivery timeline

**Execution → Complete:**
- Verify all gates passed
- Document what was delivered
- Note any deviations from plan and why
- Share knowledge and lessons learned

## COMMUNICATION

**During Planning Phase:**
- Share your understanding of requirements for validation
- Explain your approach and any trade-offs
- Ask for clarification when requirements are unclear
- Present plan artifacts for review

**During Execution Phase:**
- Report progress and any blockers discovered
- Flag when plan needs adjustment
- Share incremental progress for complex features
- Communicate when verification gates are passed

**When stuck:**
- Clearly describe what you're trying to achieve
- Explain what you've tried and what happened
- Ask specific questions about requirements or constraints
- Suggest alternatives if the original approach isn't working