# GOALS

Structured workflows for common development scenarios. All goals follow a **two-phase workflow** inspired by BMAD method: Planning Phase → Execution Phase.

## TWO-PHASE WORKFLOW STRUCTURE

### 📋 Planning Phase
**Purpose:** Understand requirements, analyze the problem, and create a plan before implementation.

**Activities:**
- Understand the problem and requirements
- Analyze affected systems and dependencies
- Design solution approach
- Create implementation plan
- Identify risks and mitigation strategies

**Phase Gates:**
- For complex tasks, present plan for review/approval before proceeding
- Confirm understanding of requirements and constraints
- Validate approach with stakeholders if needed

### 🚀 Execution Phase
**Purpose:** Implement the planned solution and verify it works correctly.

**Activities:**
- Implement according to plan
- Test incrementally as you build
- Verify solution meets requirements
- Validate no regressions introduced
- Document what was delivered

**Verification Gates:**
- ✅ Functionality: Works as specified?
- ✅ Testing: Tests pass and cover important cases?
- ✅ Integration: Doesn't break existing functionality?
- ✅ Evidence: Proof provided for all claims?

## AVAILABLE GOALS

### 🎯 Feature Development (`feature-request.md`)
**Planning Phase:** Understand → Plan  
**Execution Phase:** Build → Verify

**Best for:** Building new features, implementing user stories, adding functionality

**Two-Phase Flow:**
1. **Planning:** Understand requirements, design solution, create implementation plan
2. **Execution:** Build incrementally, test as you go, verify complete solution

### 🐛 Bug Investigation (`bug-investigation.md`)
**Planning Phase:** Understand → Investigate  
**Execution Phase:** Fix → Verify

**Best for:** Investigating bugs, fixing production issues, root cause analysis

**Two-Phase Flow:**
1. **Planning:** Gather evidence, reproduce issue, identify root cause
2. **Execution:** Implement fix, verify issue resolved, prevent regression

### 📝 Code Review (`code-review.md`)
**Planning Phase:** Analysis  
**Execution Phase:** Feedback → Verify

**Best for:** Reviewing code changes, providing feedback, ensuring quality

**Two-Phase Flow:**
1. **Planning:** Understand code, analyze all focus areas, identify issues
2. **Execution:** Provide structured feedback, verify understanding

### 🔄 Retrospective (`retrospective.md`)
**Best for:** Learning from completed work, improving processes

**Structure:** Analysis → Insights → Action Items

## SCALE-ADAPTIVE DEPTH

Goals adapt their depth based on task complexity:

**Simple Tasks:**
- Quick understanding check
- Basic plan or analysis
- Straightforward execution
- **Time:** Minutes to hours

**Medium Tasks:**
- Full requirements understanding
- Component breakdown
- Risk assessment
- **Time:** Hours to half-day

**Complex Tasks:**
- Comprehensive analysis
- Multi-layer design
- Detailed planning
- Formal phase gates
- **Time:** Days to weeks

## PHASE TRANSITIONS

**Planning → Execution:**
- Present plan summary (for complex tasks)
- Get approval/confirmation
- Identify blockers or dependencies
- Set delivery expectations

**Execution → Complete:**
- Verify all gates passed
- Document deliverables
- Note deviations from plan
- Share knowledge learned

## USAGE

**Single Role:**
```
Role + Overlays + Goal
→ Follow two-phase workflow within single role
```

**Multi-Role Collaboration:**
```
Role 1 (Planning) → Role 2 (Execution) + Collaboration Pattern + Goal
→ Different roles handle different phases
→ See foundations/agent-collaboration.md for patterns
```

## BMAD INSPIRATION

These goals incorporate patterns from BMAD (Build More, Architect Dreams) method:

- **Two-Phase Structure:** Clear separation between planning and execution
- **Phase Gates:** Review checkpoints for complex tasks
- **Scale-Adaptive:** Depth adjusts based on complexity
- **Structured Handoffs:** Clear transitions between phases

