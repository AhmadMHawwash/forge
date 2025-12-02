# BUG INVESTIGATION

Systematically investigate and fix bugs using a two-phase workflow: Planning Phase (understand and investigate) followed by Execution Phase (fix and verify).

## TWO-PHASE WORKFLOW

### 📋 PHASE 1: PLANNING (Investigation)
**Purpose:** Gather evidence, reproduce the issue, and identify root cause before implementing fixes.

#### 1. UNDERSTAND THE PROBLEM

**Gather information:**

- What exactly is happening vs what should happen?
- How often does this occur and under what conditions?
- What error messages or symptoms are visible?
- Can the problem be reproduced consistently?

**Key evidence to collect:**

- Specific steps that trigger the issue
- Error messages, logs, or stack traces
- Environment details (browser, device, data conditions)
- Recent changes that might be related

**Scale-Adaptive Depth:**
- **Simple bugs:** Quick symptom check, identify likely code area
- **Medium bugs:** Full reproduction steps, check logs, identify affected components
- **Complex bugs:** Comprehensive evidence gathering, multiple environment testing, timeline analysis, dependency mapping

#### 2. REPRODUCE THE ISSUE

**Create a reliable test case:**

- Follow the exact steps reported by users
- Try variations to understand the scope
- Test in different environments if relevant
- Document what consistently triggers the problem

**For complex bugs (Least-to-Most approach):**

1. Start with the simplest reproduction case
2. Verify the bug exists in this minimal scenario
3. Gradually add complexity until you match the full scenario
4. This helps isolate exactly which conditions trigger the issue

#### 3. INVESTIGATE ROOT CAUSE

**Follow the evidence:**

- Trace through the code path where the issue occurs
- Check recent changes in related areas
- Look for patterns in logs or error reports
- Add logging to understand program flow
- Check data state at the point of failure
- Test with different data or input conditions

**Investigation Artifacts:**
- Reproduction steps and test cases
- Code path analysis and flow diagrams
- Evidence timeline (when symptoms appear)
- Root cause hypothesis with supporting evidence
- Impact assessment (who/what is affected)

**Phase Gate:** Confirm root cause understanding before proceeding to fix (especially for complex bugs)

### 🚀 PHASE 2: EXECUTION (Fix & Verify)
**Purpose:** Implement fix, validate solution, and ensure issue is resolved.

#### 4. IMPLEMENT THE FIX

**Address the root cause:**

- Fix the underlying problem, not just symptoms
- Ensure the fix doesn't break other functionality
- Add tests to prevent the issue from happening again
- Consider if similar issues exist elsewhere
- Test the fix in realistic conditions
- Document what was changed and why

**Fix Strategy:**
- Address root cause, not symptoms
- Minimize change scope while ensuring fix is complete
- Add regression tests for the specific issue
- Check for similar patterns elsewhere in codebase

#### 5. VERIFY AND MONITOR

**Confirm the solution works:**

- Test the fix with the original reproduction steps
- Monitor for any related issues after deployment
- Verify that users can no longer reproduce the problem
- Check that system behavior is back to normal

**Verification Gates:**
- ✅ Reproduction: Original steps no longer trigger issue?
- ✅ Regression: Tests prevent issue from recurring?
- ✅ Integration: No new issues introduced?
- ✅ Evidence: Fix addresses root cause, not symptoms?
- ✅ Monitoring: System behavior normalized?

## PHASE TRANSITIONS

**Planning → Execution:**
- Present root cause analysis and proposed fix approach
- Confirm understanding of the issue and impact
- Get approval for fix strategy (especially for complex fixes)
- Set expectations for fix timeline

**Execution → Complete:**
- Verify all gates passed
- Document fix and root cause for future reference
- Share knowledge about the issue and prevention
- Update monitoring/alerting if needed

## COMMUNICATION

**During Planning Phase (Investigation):**

- Report what you've found and what you're testing
- Explain whether this is a quick fix or needs more time
- Share workarounds if available while investigating
- Ask for additional information if needed
- Present root cause analysis when identified

**During Execution Phase (Fix):**

- Report progress on fix implementation
- Share verification results
- Communicate when fix is ready for deployment
- Provide timeline for when fix will be available

**When reporting findings:**

- Clearly explain what was causing the issue
- Describe the fix and why it solves the problem
- Mention any risks or side effects of the change
- Provide timeline for when fix will be available

## ESCALATION

**Escalate when:**

- Issue affects critical functionality or many users
- Root cause requires architectural changes
- Fix is complex and could introduce new risks
- You need help from other team members or systems
