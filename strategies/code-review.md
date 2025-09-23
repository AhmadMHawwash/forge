# CODE REVIEW & REFACTORING PLAYBOOK

**🎯 MISSION BRIEF**: *[Replace this line with your specific code improvement task, e.g., "Refactor user authentication module to improve maintainability and add OAuth2 support"]*

---

## 📋 OPERATIONAL FRAMEWORK

You are now operating under the **Feature Development Agent Doctrine** (see `@core-doctrine.md`) in **CODE QUALITY IMPROVEMENT MODE**. Your mission is to enhance code quality, maintainability, and performance while preserving existing functionality.

**Enhanced with:** `@testing-focus.md` `@security-first.md` `@strategic-tactical.md` `@critical-review.md`

### EXECUTION PHASES

1. **🔍 AUDIT** - Assess current code quality and identify improvement opportunities
2. **📐 PLAN** - Design refactoring strategy and quality improvements
3. **🛠️ REFACTOR** - Execute improvements incrementally with safety checks
4. **✅ VALIDATE** - Verify functionality preserved and quality improved
5. **📚 DOCUMENT** - Update documentation and capture best practices

---

## 🔍 PHASE 1: CODE QUALITY AUDIT

### PRIMARY OBJECTIVES
- [ ] Analyze current code structure, patterns, and quality metrics
- [ ] Identify technical debt, code smells, and improvement opportunities
- [ ] Assess test coverage and documentation completeness
- [ ] Prioritize improvements based on impact and risk

### AUDIT PROTOCOL
1. **Structural Analysis**: Architecture, coupling, module boundaries, design patterns
2. **Quality Metrics**: Complexity, duplication, naming, error handling
3. **Technical Debt**: Outdated dependencies, TODO items, performance bottlenecks
4. **Testing & Documentation**: Coverage analysis, documentation completeness

### DELIVERABLE: CODE AUDIT REPORT
```markdown
## 🔍 CODE QUALITY AUDIT REPORT

### Current State Assessment
- **Code Base Size**: [Lines of code, files, complexity metrics]
- **Architecture Overview**: [Structure and patterns]
- **Technology Stack**: [Languages, frameworks, dependencies]

### Quality Metrics
- **Complexity**: [Average and maximum scores]
- **Duplication**: [Percentage and critical sections]
- **Test Coverage**: [Overall percentage and gaps]

### Identified Issues
**🔴 Critical**: [High impact, high risk issues]
**🟡 High Priority**: [High impact, medium risk]
**🟢 Medium Priority**: [Medium impact, low risk]

### Recommended Priority: 🔴/🟡/🟢
```

---

## 📐 PHASE 2: REFACTORING STRATEGY & PLANNING

### PRIMARY OBJECTIVES
- [ ] Design comprehensive refactoring strategy with minimal risk
- [ ] Plan incremental improvements that preserve functionality
- [ ] Establish quality gates and rollback procedures
- [ ] Create timeline with dependencies and milestones

### PLANNING PROTOCOL
1. **Strategy Design**: Impact vs effort matrix, incremental approach, safety measures
2. **Implementation Phases**: Logical phases, dependencies, success criteria
3. **Risk Assessment**: Risk identification, mitigation strategies, monitoring

### DELIVERABLE: REFACTORING PLAN
```markdown
## 📐 REFACTORING STRATEGY & PLAN

### Overall Strategy
- **Approach**: [Incremental/phased with rationale]
- **Timeline**: [Duration and milestones]
- **Success Metrics**: [Measurement criteria]

### Implementation Phases
**Phase 1**: [Objectives, scope, changes, risk level, success criteria]
**Phase 2**: [Same structure]

### Quality Assurance
- **Testing**: [Functionality preservation approach]
- **Performance**: [Benchmarking strategy]
- **Deployment**: [Rollout approach]

### Risk Management
- **High-Risk Areas**: [Components requiring caution]
- **Mitigation**: [Risk reduction measures]
- **Rollback**: [Undo procedures]
```

---

## 🛠️ PHASE 3: INCREMENTAL REFACTORING EXECUTION

### PRIMARY OBJECTIVES
- [ ] Execute refactoring following planned phases
- [ ] Maintain functionality throughout the process
- [ ] Monitor quality improvements and system stability
- [ ] Document changes and decisions comprehensively

### REFACTORING PROTOCOL
**For Each Phase:**
1. **Setup**: Feature branch, baseline metrics, monitoring, rollback prep
2. **Implementation**: Smallest changes, continuous testing, functionality preservation
3. **Validation**: Test execution, performance checks, quality review
4. **Completion**: Pull request, code review, merge, documentation

### REFACTORING PRINCIPLES
- **Safety First**: Never break functionality, small increments, comprehensive testing
- **Quality Focus**: Improve readability, reduce complexity, enhance error handling
- **Performance Awareness**: Monitor impact, optimize speed and resources

---

## ✅ PHASE 4: VALIDATION & QUALITY VERIFICATION

### PRIMARY OBJECTIVES
- [ ] Verify all refactoring objectives achieved
- [ ] Confirm functionality completely preserved
- [ ] Validate quality improvements meet targets
- [ ] Ensure documentation reflects changes

### VALIDATION PROTOCOL
- **Functionality**: All existing features work as before, no regressions
- **Quality**: Complexity reduced, duplication eliminated, patterns implemented
- **Testing**: Coverage maintained/improved, all tests pass
- **Documentation**: Accurate reflection of codebase

### DELIVERABLE: VALIDATION REPORT
```markdown
## ✅ REFACTORING VALIDATION REPORT

### Objective Achievement
- **Goals Met**: [✅ All / ⚠️ Partial with details]
- **Quality Targets**: [Metrics achieved vs targets]
- **Performance**: [Improvements achieved]

### Functionality Preservation
- **Regression Testing**: [Results]
- **User Acceptance**: [Validation]
- **Performance Impact**: [Before/after metrics]

### Success Assessment: ✅/⚠️
```

---

## 📚 PHASE 5: DOCUMENTATION & KNOWLEDGE TRANSFER

### PRIMARY OBJECTIVES
- [ ] Update all documentation to reflect refactored codebase
- [ ] Capture refactoring decisions and reasoning
- [ ] Create knowledge transfer materials
- [ ] Establish best practices for future development

### DELIVERABLE: KNOWLEDGE CAPTURE
```markdown
## 📚 DOCUMENTATION & KNOWLEDGE CAPTURE

### Updated Documentation
- **Architecture**: [Updated design docs]
- **API**: [Interface specifications]
- **Deployment**: [Updated procedures]

### Decision Records
- **Choices Made**: [Key decisions with rationale]
- **Trade-offs**: [Options considered]
- **Lessons Learned**: [Insights captured]

### Knowledge Assets
- **Best Practices**: [Standards established]
- **Team Training**: [Knowledge transfer materials]
```

---

## 🚨 ESCALATION TRIGGERS

**Escalate immediately when:**
- Refactoring introduces functionality regressions
- Performance degradation exceeds thresholds
- Timeline significantly exceeds estimates
- Team consensus cannot be reached
- Business priorities change affecting value

---

## 📊 SUCCESS CRITERIA

**Mission successful when:**
- ✅ All quality issues resolved/improved
- ✅ Functionality completely preserved
- ✅ Maintainability demonstrably improved
- ✅ Technical debt reduced
- ✅ Documentation current and accurate

---

**🎯 REFACTOR WITH PURPOSE. PRESERVE WITH PRECISION. IMPROVE WITH WISDOM.**