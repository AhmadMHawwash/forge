# FRAMEWORK VALIDATION SYSTEMS

**🎯 PURPOSE**: Ensure correct framework usage, catch errors early, and maintain quality standards across all implementations.

---

## 🔍 PRE-EXECUTION VALIDATION

### Mission Brief Validation
```markdown
## MISSION BRIEF QUALITY CHECKLIST
- [ ] **Specificity**: Contains concrete, measurable objectives
- [ ] **Scope**: Clearly bounded and achievable  
- [ ] **Context**: Provides sufficient background information
- [ ] **Success Criteria**: Implicit or explicit acceptance criteria
- [ ] **Urgency**: Appropriate priority level indicated

## VALIDATION RULES
**PASS Examples**:
- ✅ "Implement OAuth2 authentication with Google and GitHub providers, including user profile sync"
- ✅ "Fix intermittent 500 errors in payment processing affecting 15% of checkout attempts"
- ✅ "Refactor UserService class to reduce cyclomatic complexity from 25 to <10"

**FAIL Examples**:
- ❌ "Make the app better" (too vague)
- ❌ "Fix the bug" (insufficient context)
- ❌ "Add some features" (no specificity)
```

### Framework Component Validation
```markdown
## COMPONENT SELECTION VALIDATION
Before proceeding, confirm:

### Base Playbook Selection
- [ ] **Correct Playbook**: Matches primary intent (BUILD/FIX/IMPROVE/LEARN)
- [ ] **Scope Alignment**: Playbook complexity matches task scope
- [ ] **Team Readiness**: Team can execute chosen playbook effectively

### Directive Combination Validation  
- [ ] **Compatibility Check**: No conflicting directives selected
- [ ] **Context Appropriateness**: Directives match project context
- [ ] **Token Budget**: Total combination under 15,000 tokens
- [ ] **Value Justification**: Each directive adds clear value

### Required Information Validation
- [ ] **System Context**: Current state and constraints documented
- [ ] **Stakeholder Input**: Required approvals and feedback channels identified
- [ ] **Resource Availability**: Team capacity and timeline confirmed
- [ ] **Dependency Status**: External dependencies identified and accessible
```

---

## ⚙️ EXECUTION VALIDATION

### Phase Completion Validation
```markdown
## PHASE GATE VALIDATION

### Discovery Phase Checklist
- [ ] **Requirements Analysis**: Complete and validated with stakeholders
- [ ] **System Investigation**: Current state thoroughly documented with evidence
- [ ] **Impact Assessment**: Technical and business impact analyzed
- [ ] **Feasibility Confirmation**: Technical approach validated as achievable
- [ ] **Risk Identification**: Major risks identified with mitigation plans

**Validation Method**: Evidence-based review with stakeholder confirmation

### Planning Phase Checklist  
- [ ] **Architecture Design**: Component boundaries and interfaces defined
- [ ] **Implementation Strategy**: Phased approach with clear deliverables
- [ ] **Quality Gates**: Success criteria and testing strategy defined
- [ ] **Resource Planning**: Timeline and dependencies mapped
- [ ] **Risk Mitigation**: Rollback procedures documented

**Validation Method**: Peer review of design decisions and implementation plan

### Execution Phase Checklist
- [ ] **TDD Adherence**: Tests written before implementation
- [ ] **Quality Standards**: Code follows established conventions
- [ ] **Progress Tracking**: Regular updates with concrete evidence
- [ ] **Issue Resolution**: Blockers documented and actively addressed
- [ ] **Documentation**: Code and decisions documented inline

**Validation Method**: Automated checks + manual code review

### Verification Phase Checklist
- [ ] **Functionality Validation**: All acceptance criteria demonstrably met
- [ ] **Quality Confirmation**: Code quality metrics meet standards
- [ ] **Test Validation**: Comprehensive test coverage with passing results
- [ ] **Performance Validation**: Performance requirements met
- [ ] **Documentation Validation**: All artifacts current and accurate

**Validation Method**: Comprehensive testing + stakeholder acceptance
```

### Evidence Quality Validation
```markdown
## EVIDENCE STANDARDS VALIDATION

### Required Evidence Format
**Code Evidence**: `file:/path/to/file.ext:start-end`
- [ ] **Accessibility**: File path is accessible and current
- [ ] **Relevance**: Code section directly supports claim
- [ ] **Completeness**: All related changes included

**Test Evidence**: `result:test_command:passed/total:coverage`
- [ ] **Execution Proof**: Recent test run results provided
- [ ] **Coverage Adequacy**: Coverage meets project standards
- [ ] **Test Quality**: Tests actually validate intended functionality

**Performance Evidence**: `metric:measurement:value:target:status`
- [ ] **Measurement Method**: Clear methodology for metrics
- [ ] **Baseline Comparison**: Before/after or target comparison
- [ ] **Relevance**: Metrics directly relate to requirements

### Evidence Validation Automation
```bash
# Automated Evidence Checker (Pseudocode)
validate_evidence() {
    for evidence in evidence_list:
        if evidence.type == "file":
            assert file_exists(evidence.path)
            assert lines_exist(evidence.start, evidence.end)
        elif evidence.type == "test":
            assert test_command_valid(evidence.command)
            assert coverage_adequate(evidence.coverage)
        elif evidence.type == "metric":
            assert metric_reasonable(evidence.value)
            assert target_comparison_valid(evidence.target)
}
```
```

---

## 🔧 AUTOMATED VALIDATION TOOLS

### Pre-Flight Validation Script
```markdown
## FRAMEWORK VALIDATION SCRIPT

### Input Validation
```bash
#!/bin/bash
# Framework Pre-Flight Check

echo "🔍 FRAMEWORK VALIDATION STARTING..."

# Check 1: Mission Brief Quality
if grep -q "Replace this line" mission_brief.txt; then
    echo "❌ Mission brief not customized"
    exit 1
fi

# Check 2: Component Compatibility
python validate_directives.py --check-compatibility

# Check 3: Token Count
total_tokens=$(wc -w combined_prompt.txt | awk '{print $1}')
if [ $total_tokens -gt 15000 ]; then
    echo "⚠️  Token count ($total_tokens) exceeds recommended limit"
fi

# Check 4: Required Context
if [ ! -f "project_context.md" ]; then
    echo "⚠️  No project context file found"
fi

echo "✅ Pre-flight validation complete"
```

### Quality Gate Automation
```yaml
# CI/CD Integration Example
framework_validation:
  stage: validate
  script:
    - python framework_validator.py
    - check_evidence_quality.py
    - validate_test_coverage.py
  rules:
    - if: $CI_PIPELINE_SOURCE == "framework_session"
  allow_failure: false
```
```

### Real-Time Validation Feedback
```markdown
## VALIDATION FEEDBACK SYSTEM

### During Prompt Construction
```markdown
**REAL-TIME CHECKS**:
- ✅ Mission brief is specific and measurable
- ⚠️  Token count approaching limit (12,500/15,000)  
- ❌ Conflicting directives detected: concise-communication + testing-focus in planning phase
- ✅ All required project context provided

**RECOMMENDATIONS**:
- Use optimized core-doctrine.md for maximum efficiency
- Split into two sessions: planning with full detail, execution with concise communication
```

### Post-Execution Validation
```markdown
**COMPLETION CHECKLIST AUTOMATION**:
- [ ] All phase deliverables present: ✅ Automated check
- [ ] Evidence format compliance: ✅ Automated check  
- [ ] Quality gates passed: ⚠️  2 of 8 gates need manual review
- [ ] Documentation updated: ❌ 3 files need updates

**NEXT STEPS**:
1. Complete manual review of flagged quality gates
2. Update documentation for modified components
3. Run final validation before session closure
```
```

---

## 📋 VALIDATION TEMPLATES

### Session Startup Validation
```markdown
# SESSION STARTUP VALIDATION TEMPLATE

## PRE-SESSION CHECKLIST
Date: [DATE]
Validator: [NAME]
Project: [PROJECT_NAME]

### Framework Setup Validation
- [ ] **Correct Playbook Selected**: [playbook-name.md] matches intent
- [ ] **Appropriate Directives**: [directive-list] are compatible and valuable
- [ ] **Token Budget**: [X tokens] within acceptable range (<15,000)
- [ ] **Mission Brief Quality**: Specific, measurable, and achievable

### Context Validation
- [ ] **Project State**: Current state documented and accurate
- [ ] **Requirements**: Clear and validated with stakeholders
- [ ] **Constraints**: Technical and business limitations identified
- [ ] **Resources**: Team availability and tools accessible

### Risk Assessment
- [ ] **Technical Risks**: Identified and have mitigation plans
- [ ] **Process Risks**: Framework complexity appropriate for team
- [ ] **Timeline Risks**: Realistic expectations set with stakeholders

**Validation Status**: ✅ APPROVED / ⚠️ APPROVED WITH NOTES / ❌ REJECTED

**Notes**: [Any concerns or recommendations]
```

### Mid-Session Quality Check
```markdown
# MID-SESSION QUALITY CHECK TEMPLATE

## PROGRESS VALIDATION
Session: [X] of [Y]
Current Phase: [PHASE_NAME]
Progress: [X]% complete

### Phase Completion Validation
- [ ] **Previous Phases**: All required deliverables present with evidence
- [ ] **Current Phase**: On track with clear next steps
- [ ] **Quality Gates**: All mandatory checks completed
- [ ] **Evidence Quality**: Concrete proof provided for all claims

### Process Adherence Validation  
- [ ] **Framework Following**: Methodology being followed correctly
- [ ] **Communication Standards**: Status updates clear and actionable
- [ ] **Decision Documentation**: Key choices recorded with rationale
- [ ] **Issue Tracking**: Blockers identified and being addressed

**Quality Status**: ✅ ON TRACK / ⚠️ NEEDS ATTENTION / ❌ INTERVENTION REQUIRED

**Action Items**: [Specific improvements needed]
```

### Session Closure Validation
```markdown
# SESSION CLOSURE VALIDATION TEMPLATE

## COMPLETION VALIDATION
Final Phase: [COMPLETED_PHASE]  
Session Outcome: [SUCCESS/PARTIAL/BLOCKED]

### Deliverable Validation
- [ ] **All Phases Completed**: Required outputs delivered
- [ ] **Quality Standards Met**: Code quality, test coverage, documentation
- [ ] **Acceptance Criteria**: Stakeholder validation received
- [ ] **Evidence Complete**: All claims supported by concrete proof

### Knowledge Capture Validation
- [ ] **Decisions Documented**: Architecture and implementation choices recorded
- [ ] **Lessons Learned**: Insights captured for future reference
- [ ] **Process Feedback**: Framework effectiveness assessed
- [ ] **Handover Prepared**: Next session context ready if applicable

**Session Quality Score**: [1-10] with justification
**Framework Effectiveness**: [Improved/Maintained/Hindered] development process
**Recommendations**: [For future sessions or framework improvements]
```

---

## 🎯 VALIDATION SUCCESS CRITERIA

### Validation System Effectiveness
```markdown
## SUCCESS METRICS
- **Error Prevention**: >90% of common mistakes caught pre-execution
- **Quality Improvement**: Measurable increase in deliverable quality
- **Efficiency Gains**: Validation time < 5% of total session time
- **User Satisfaction**: >8/10 rating for validation helpfulness

## CONTINUOUS IMPROVEMENT
- Monthly review of validation effectiveness
- Update validation rules based on common issues
- Automate repetitive validation tasks
- Gather team feedback on validation burden vs. value
```

### Validation Tool Maturity
```markdown
## MATURITY LEVELS

**Level 1**: Manual checklists and templates
**Level 2**: Semi-automated validation with scripts  
**Level 3**: Integrated validation with real-time feedback
**Level 4**: AI-powered validation with adaptive learning

**Current Target**: Level 2 with progression to Level 3
```

---

**🎯 VALIDATE EARLY. VALIDATE OFTEN. ENSURE EXCELLENCE.**
