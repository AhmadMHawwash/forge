# CODE REVIEW

Systematically review code using a two-phase workflow: Planning Phase (understand and analyze) followed by Execution Phase (provide feedback and verify).

## TWO-PHASE WORKFLOW

### 📋 PHASE 1: PLANNING (Analysis)
**Purpose:** Understand the code, identify issues, and prepare comprehensive feedback.

### WHAT TO FOCUS ON

**Correctness:**
- Does the code do what it's supposed to do?
- Are edge cases and error conditions handled properly?
- Will this work with realistic data and usage patterns?
- Are there any logical errors or assumptions that could fail?

**Quality:**
- Is the code easy to understand and maintain?
- Does it follow existing patterns and conventions?
- Are variables and functions named clearly?
- Is the solution appropriately complex for the problem?

**Safety:**
- Could this change break existing functionality?
- Are there security implications to consider?
- Is error handling robust and informative?
- Are dependencies and integrations handled safely?

**Testing:**
- Are there tests for the important functionality?
- Do tests cover edge cases and error conditions?
- Will these tests catch regressions if code changes?

### REVIEW PROCESS

**Before starting (Understanding Phase):**
- Understand what problem this code is solving
- Check if the approach makes sense for the requirements
- Look at the scope and size of changes
- Read related context (PR description, linked issues)

**During analysis (Planning Phase):**
- Read the code as if you're trying to understand it for the first time
- Consider how this fits with the existing codebase
- Think about what could go wrong in production
- Look for simpler ways to achieve the same result
- Identify all issues before providing feedback

**Scale-Adaptive Depth:**
- **Simple changes:** Quick scan, check correctness and style
- **Medium changes:** Full code read, check all focus areas, identify 5-10 issues
- **Complex changes:** Deep analysis, architectural impact, security review, performance implications, comprehensive issue list

**Phase Gate:** Complete analysis before providing feedback (ensures comprehensive review)

### 🚀 PHASE 2: EXECUTION (Feedback & Verification)
**Purpose:** Provide structured feedback and verify understanding.

**Provide feedback:**
- Point out specific issues with clear explanations
- Suggest alternatives when criticizing approaches
- Ask questions when you don't understand something
- Acknowledge good practices and clever solutions
- Structure feedback by priority and category

**Verification Gates:**
- ✅ Analysis: All focus areas reviewed?
- ✅ Feedback: Issues clearly explained with context?
- ✅ Prioritization: Critical issues flagged appropriately?
- ✅ Constructive: Feedback actionable and helpful?

## FEEDBACK GUIDELINES

**Be specific:**
- Point to exact lines or functions
- Explain why something is problematic
- Suggest concrete improvements
- Provide examples when helpful

**Be constructive:**
- Focus on the code, not the person
- Explain the reasoning behind feedback
- Offer to help solve complex issues
- Recognize good work and improvements

**Prioritize issues:**
- Must fix: Security, correctness, breaking changes
- Should fix: Performance, maintainability, style violations
- Consider: Optimizations, alternative approaches, future improvements

## COMMON ISSUES TO WATCH FOR

**Logic and correctness:**
- Off-by-one errors and boundary conditions
- Null pointer or undefined value handling
- Race conditions in concurrent code
- Incorrect error handling or recovery

**Maintainability:**
- Functions or classes that are too large or complex
- Unclear naming or missing documentation
- Hardcoded values that should be configurable
- Duplicated code that could be refactored

**Performance:**
- Inefficient algorithms or data structures
- Unnecessary database queries or API calls
- Memory leaks or resource management issues
- Blocking operations that could be asynchronous

**Security:**
- Input validation and sanitization
- Authentication and authorization checks
- Sensitive data exposure in logs or errors
- Unsafe use of external libraries or dependencies

## PHASE TRANSITIONS

**Planning → Execution:**
- Complete full analysis before providing feedback
- Organize findings by category and priority
- Prepare clear explanations for each issue
- Identify what's working well to acknowledge

**Execution → Complete:**
- Verify all critical issues addressed
- Confirm feedback is actionable
- Document any follow-up needed
- Share knowledge and learning points