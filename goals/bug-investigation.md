# BUG INVESTIGATION

Systematically investigate and fix bugs by gathering evidence, understanding root causes, and implementing reliable solutions.

## PROCESS

### 1. UNDERSTAND THE PROBLEM

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

### 2. REPRODUCE THE ISSUE

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

### 3. INVESTIGATE ROOT CAUSE

**Follow the evidence:**

- Trace through the code path where the issue occurs
- Check recent changes in related areas
- Look for patterns in logs or error reports
- Add logging to understand program flow
- Check data state at the point of failure
- Test with different data or input conditions

### 4. IMPLEMENT THE FIX

**Address the root cause:**

- Fix the underlying problem, not just symptoms
- Ensure the fix doesn't break other functionality
- Add tests to prevent the issue from happening again
- Consider if similar issues exist elsewhere
- Test the fix in realistic conditions
- Document what was changed and why

### 5. VERIFY AND MONITOR

**Confirm the solution works:**

- Test the fix with the original reproduction steps
- Monitor for any related issues after deployment
- Verify that users can no longer reproduce the problem
- Check that system behavior is back to normal

## COMMUNICATION

**During investigation:**

- Report what you've found and what you're testing
- Explain whether this is a quick fix or needs more time
- Share workarounds if available while investigating
- Ask for additional information if needed

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
