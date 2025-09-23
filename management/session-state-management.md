# SESSION STATE MANAGEMENT

**🎯 PURPOSE**: Maintain context and progress across multi-session development projects.

**Core Integration:** `@core-doctrine.md` phases and protocols
**Evidence Chain:** `@standards/evidence-standards.md` preservation
**Analytics:** `@framework-metrics.md` tracking continuity

---

## 📋 SESSION STATE TEMPLATE

### Core State Format (Copy at session start)
```markdown
# PROJECT STATE - [PROJECT_NAME]
**Last Updated**: [DATE/TIME]
**Session**: [N] of [ESTIMATED_TOTAL]

## 🎯 PROJECT OVERVIEW
- **Mission**: [Original project goal]
- **Current Phase**: [INVESTIGATE/PLAN/EXECUTE/VERIFY/RETROSPECT]
- **Progress**: [X]% complete
- **Next Milestone**: [Specific deliverable]

## ✅ COMPLETED WORK
### Phase 1: INVESTIGATE ✅
- **Requirements**: [Final validated requirements]
- **System Analysis**: [Key findings about current system]
- **Constraints**: [Technical/business limitations identified]
- **Risks**: [Major risks identified with mitigation plans]

### Phase 2: PLAN [✅/🚧/⚠️]
- **Architecture**: [High-level design decisions]
- **Implementation Strategy**: [Chosen approach with rationale]
- **Quality Gates**: [Defined success criteria]

### Phase 3: EXECUTE [✅/🚧/⚠️/❌]
- **Components Built**: [List with status]
- **Tests Implemented**: [Coverage and results]
- **Code Quality**: [Metrics and assessments]

## 🧠 KEY DECISIONS
| Decision | Rationale | Alternatives Rejected | Impact |
|----------|-----------|----------------------|---------|
| [Tech choice] | [Why selected] | [What was considered] | [Effect on project] |
| [Architecture] | [Reasoning] | [Other options] | [Implications] |

## 🚧 CURRENT FOCUS
- **Active Task**: [What's being worked on now]
- **Blockers**: [Specific issues preventing progress]
- **Dependencies**: [Waiting for external inputs]
- **ETA**: [Expected completion time]

## 📊 EVIDENCE VAULT
### Technical Evidence
- **Code Locations**: [Key files and their purposes]
- **Test Results**: [Latest test execution results]
- **Performance Data**: [Benchmarks and metrics]

### Business Evidence
- **Stakeholder Feedback**: [User/business validation]
- **Acceptance Criteria Status**: [Which are met/pending]
- **Value Delivered**: [Measurable business impact]

## ⚠️ RISKS & ISSUES
| Risk/Issue | Severity | Status | Mitigation |
|------------|----------|---------|------------|
| [Description] | [H/M/L] | [OPEN/MONITORING/RESOLVED] | [Action taken] |

## 🔄 SESSION HANDOVER
### For Next Session
- **Immediate Priority**: [First thing to tackle]
- **Context Needed**: [Information to refresh]
- **Decisions Pending**: [Choices that need to be made]
- **Validation Required**: [What needs verification]
```

---

## 🔄 SESSION TRANSITION PROTOCOLS

### Starting a New Session
```markdown
## SESSION STARTUP CHECKLIST
- [ ] Review project state from last session
- [ ] Validate current system state hasn't changed
- [ ] Confirm previous session's work is still valid
- [ ] Identify any new constraints or requirements
- [ ] Update project state with any changes

**Context Refresh Questions**:
1. Has anything changed in the system since last session?
2. Are there new requirements or constraints?
3. Did stakeholders provide feedback on previous work?
4. Are there new blockers or dependencies?
```

### Ending a Session
```markdown
## SESSION CLOSURE CHECKLIST
- [ ] Update project state with all progress made
- [ ] Document key decisions and their rationale
- [ ] Capture any new risks or issues identified
- [ ] Define clear next steps for continuation
- [ ] Archive evidence from this session

**Handover Preparation**:
1. What was accomplished this session?
2. What are the immediate priorities for next session?
3. What context will be critical to remember?
4. Are there any time-sensitive dependencies?
```

---

## 📊 STATE TRACKING AUTOMATION

### Progress Indicators
```markdown
## PROGRESS DASHBOARD
**Overall Progress**: [Progress bar: ████████░░] 80%

**Phase Breakdown**:
- Investigate: ████████████ 100% ✅
- Plan: ████████████ 100% ✅  
- Execute: ████████░░░░ 70% 🚧
- Verify: ░░░░░░░░░░░░ 0% ⏳
- Retrospect: ░░░░░░░░░░░░ 0% ⏳

**Quality Gates Status**:
- Requirements Clarity: ✅ PASSED
- Architecture Review: ✅ PASSED
- Code Quality: 🚧 IN PROGRESS
- Test Coverage: ⚠️ NEEDS ATTENTION
- Performance: ⏳ PENDING
```

### Velocity Tracking
```markdown
## VELOCITY METRICS
**Session Performance**:
- Sessions Planned: 5
- Sessions Completed: 3
- Velocity: 1.2 phases per session
- Estimated Remaining: 2 sessions

**Quality Metrics**:
- Rework Rate: 5% (target: <10%)
- Defect Density: 0.1 per KLOC
- Test Coverage: 85% (target: >90%)
```

---

## 🧩 CONTEXT COMPRESSION TECHNIQUES

### Essential Context Only
**Principle**: Include only information that affects future decisions

```markdown
## COMPRESSED STATE (For Token Efficiency)
**Project**: [Name] | **Phase**: [Current] | **Progress**: [X]%

**Critical Context**:
- **Architecture**: [Key design decision]
- **Constraints**: [Must-know limitations]
- **Current Focus**: [Active work]
- **Next Session**: [Priority #1]

**Evidence Links**:
- Code: [file:/path/to/main.js:123-145]
- Tests: [91% coverage, all passing]
- Performance: [245ms avg, target: <300ms]
```

### Smart Context Inheritance
```markdown
## CONTEXT INHERITANCE RULES
1. **Always Include**: Current phase, active work, blockers
2. **Include if Changed**: Requirements, architecture decisions, constraints
3. **Archive if Stable**: Completed phases, resolved issues, old evidence
4. **Compress if Large**: Long investigation results, detailed test outputs
```

---

## 🔧 STATE MANAGEMENT TOOLS

### State Validation
```markdown
## STATE CONSISTENCY CHECK
Before proceeding, verify:
- [ ] Project state reflects actual system state
- [ ] All claimed completed work is verifiable
- [ ] Dependencies are still accurate
- [ ] Constraints haven't changed
- [ ] Evidence is still accessible
```

### State Evolution Tracking
```markdown
## STATE CHANGE LOG
| Session | Changes Made | Decisions | Issues |
|---------|-------------|-----------|---------|
| 1 | Initial investigation | Tech stack choice | None |
| 2 | Architecture design | Database schema | Performance concerns |
| 3 | Core implementation | Error handling approach | Integration complexity |
```

### Recovery Procedures
```markdown
## STATE RECOVERY PROTOCOLS

**If State is Lost**:
1. Examine codebase for evidence of previous work
2. Review commit history and PR descriptions  
3. Check documentation for architectural decisions
4. Validate current system against known requirements
5. Reconstruct minimal state needed to proceed

**If State is Inconsistent**:
1. Identify discrepancies between state and reality
2. Validate each claim against evidence
3. Update state to reflect actual situation
4. Document what caused the inconsistency
5. Adjust process to prevent recurrence
```

---

## 🎯 STATE MANAGEMENT SUCCESS CRITERIA

**Effective state management achieved when**:
- Context is preserved across sessions without information loss
- New sessions can start immediately without re-investigation
- Decisions and rationale are traceable
- Progress is accurately tracked and predictable
- Evidence remains accessible and verifiable

---

**🎯 PRESERVE CONTEXT. MAINTAIN MOMENTUM. ENSURE CONTINUITY.**
