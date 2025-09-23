# EVIDENCE STANDARDS

**🎯 PURPOSE**: Establish precise, verifiable, and actionable evidence formats to ensure all claims are backed by concrete proof.

---

## 📋 EVIDENCE TAXONOMY

### Evidence Classification System
```markdown
## EVIDENCE TYPES

### 🔍 **INVESTIGATIVE EVIDENCE** (Discovery Phase)
- **System State**: Current configuration, data, dependencies
- **Requirement Validation**: Stakeholder confirmations, acceptance criteria
- **Feasibility Assessment**: Technical capability proofs, constraint documentation

### 📐 **DESIGN EVIDENCE** (Planning Phase)  
- **Architecture Decisions**: Design rationale with alternatives considered
- **Technical Specifications**: Interface definitions, data models, protocols
- **Implementation Strategy**: Phasing approach with dependency mapping

### ⚡ **IMPLEMENTATION EVIDENCE** (Execution Phase)
- **Code Evidence**: File changes with line-by-line attribution
- **Test Evidence**: Execution results with coverage metrics
- **Quality Evidence**: Static analysis, performance benchmarks, security scans

### ✅ **VERIFICATION EVIDENCE** (Validation Phase)
- **Functional Proof**: Acceptance criteria validation with demonstration
- **Quality Confirmation**: Comprehensive quality gate results
- **Integration Validation**: System-level testing and compatibility confirmation

### 📚 **LEARNING EVIDENCE** (Retrospective Phase)
- **Outcome Analysis**: Measurable results vs. initial objectives
- **Process Assessment**: Methodology effectiveness with metrics
- **Knowledge Artifacts**: Documented insights and improvement recommendations
```

---

## 🎯 STANDARDIZED EVIDENCE FORMATS

### Code Evidence Format
```markdown
## STANDARDIZED FORMAT
`code:[operation]:[path]:[location]:[description]`

### OPERATION TYPES
- **created**: New file or major new functionality
- **modified**: Changes to existing code
- **deleted**: Removed code or files
- **refactored**: Structural improvements without behavior change
- **fixed**: Bug corrections

### LOCATION SPECIFICATION
- **Full file**: `file:/path/to/file.ext`
- **Specific lines**: `file:/path/to/file.ext:123-145`
- **Function/method**: `file:/path/to/file.ext:function:methodName`
- **Class/component**: `file:/path/to/file.ext:class:ClassName`

### EXAMPLES
```
✅ code:modified:/src/auth/UserService.ts:45-67:Added OAuth2 token validation logic
✅ code:created:/tests/auth/UserService.test.ts:1-89:Comprehensive test suite for OAuth2 integration
✅ code:refactored:/src/utils/encryption.ts:class:EncryptionUtil:Simplified key management interface
✅ code:fixed:/src/api/payment.ts:23:Corrected null pointer exception in payment processing
```
```

### Test Evidence Format
```markdown
## STANDARDIZED FORMAT
`test:[type]:[command]:[result]:[coverage]:[timestamp]`

### TEST TYPES
- **unit**: Individual function/method testing
- **integration**: Component interaction testing
- **e2e**: End-to-end user journey testing
- **performance**: Load, stress, and response time testing
- **security**: Vulnerability and penetration testing

### RESULT SPECIFICATION
- **passed**: `X/Y` (X passed out of Y total)
- **failed**: `X/Y:failed` with failure details
- **coverage**: `XX.X%` percentage coverage
- **performance**: `XXms` average response time

### EXAMPLES
```
✅ test:unit:npm test auth:47/47:coverage:94.2%:2024-01-15T10:30:00Z
✅ test:integration:npm run test:integration:23/25:failed:2:coverage:87.5%:2024-01-15T11:00:00Z
✅ test:e2e:playwright test checkout:12/12:coverage:n/a:2024-01-15T11:30:00Z
✅ test:performance:k6 run load-test.js:avg:245ms:p95:380ms:target:<500ms
```
```

### Quality Evidence Format
```markdown
## STANDARDIZED FORMAT
`quality:[metric]:[tool]:[value]:[target]:[status]`

### QUALITY METRICS
- **complexity**: Cyclomatic complexity measurements
- **duplication**: Code duplication percentage
- **maintainability**: Maintainability index score
- **security**: Security vulnerability count
- **performance**: Response time, throughput, resource usage

### TOOLS
- **sonar**: SonarQube analysis
- **eslint**: JavaScript linting
- **lighthouse**: Web performance auditing
- **snyk**: Security vulnerability scanning

### EXAMPLES
```
✅ quality:complexity:sonar:avg:6.2:target:<10:passed
✅ quality:duplication:sonar:3.1%:target:<5%:passed
✅ quality:security:snyk:0_high:2_medium:target:0_high:needs_attention
✅ quality:performance:lighthouse:score:94:target:>90:passed
```
```

### Business Evidence Format
```markdown
## STANDARDIZED FORMAT
`business:[metric]:[measurement]:[value]:[target]:[validation_method]`

### BUSINESS METRICS
- **satisfaction**: User/stakeholder satisfaction scores
- **adoption**: Feature usage and uptake rates
- **performance**: Business KPI improvements
- **value**: ROI, cost savings, revenue impact

### VALIDATION METHODS
- **survey**: Direct stakeholder feedback
- **analytics**: Usage data and metrics
- **interview**: Qualitative feedback sessions
- **observation**: Direct user behavior analysis

### EXAMPLES
```
✅ business:satisfaction:nps_score:8.4/10:target:>7.0:survey:15_respondents
✅ business:adoption:feature_usage:67%_active_users:target:>50%:analytics:30_day_period
✅ business:performance:response_time_improvement:40%_reduction:target:>25%:monitoring
```
```

---

## 🔧 EVIDENCE COLLECTION PROTOCOLS

### Automated Evidence Collection
```markdown
## AUTOMATED COLLECTION SETUP

### Git Hooks Integration
```bash
#!/bin/bash
# Pre-commit hook for evidence collection

# Collect code evidence
git diff --cached --name-status | while read status file; do
    echo "code:${status,,}:${file}:$(git log -1 --pretty=format:'%h:%s')" >> .evidence_log
done

# Run automated tests and collect results
npm test --coverage --json > test_results.json
echo "test:unit:npm_test:$(parse_test_results.py test_results.json)" >> .evidence_log
```

### CI/CD Pipeline Integration
```yaml
# Evidence collection in pipeline
collect_evidence:
  stage: validate
  script:
    - run_quality_analysis.sh
    - collect_performance_metrics.sh
    - generate_evidence_report.py
  artifacts:
    reports:
      evidence: evidence_report.json
```
```

### Manual Evidence Collection
```markdown
## STRUCTURED COLLECTION TEMPLATES

### Code Review Evidence Template
```markdown
## CODE REVIEW EVIDENCE
**Reviewer**: [Name]
**Date**: [YYYY-MM-DD]
**Files Reviewed**: [List with line ranges]

**Quality Assessment**:
- Code Standards: ✅/⚠️/❌ [Comments]
- Logic Correctness: ✅/⚠️/❌ [Comments]  
- Test Coverage: ✅/⚠️/❌ [Comments]
- Documentation: ✅/⚠️/❌ [Comments]

**Evidence**: code:reviewed:[files]:quality:[overall_score]:peer_review
```

### Stakeholder Validation Evidence Template
```markdown
## STAKEHOLDER VALIDATION EVIDENCE
**Stakeholder**: [Name/Role]
**Date**: [YYYY-MM-DD]
**Validation Method**: [demo/testing/review]

**Acceptance Criteria Review**:
- Criterion 1: ✅/⚠️/❌ [Stakeholder feedback]
- Criterion 2: ✅/⚠️/❌ [Stakeholder feedback]
- Criterion N: ✅/⚠️/❌ [Stakeholder feedback]

**Evidence**: business:acceptance:[feature_name]:validated:[approval_level]:stakeholder_review
```
```

---

## 📊 EVIDENCE VERIFICATION SYSTEM

### Automated Verification
```markdown
## VERIFICATION PROTOCOLS

### Code Evidence Verification
```python
# Evidence verification script
def verify_code_evidence(evidence_string):
    parts = evidence_string.split(':')
    operation, path, location, description = parts[1:5]
    
    # Verify file exists
    if not os.path.exists(path):
        return False, f"File {path} not found"
    
    # Verify line ranges if specified
    if '-' in location and location != 'class' and location != 'function':
        start, end = map(int, location.split('-'))
        with open(path) as f:
            lines = f.readlines()
            if len(lines) < end:
                return False, f"File has {len(lines)} lines, evidence claims {end}"
    
    return True, "Evidence verified"
```

### Test Evidence Verification
```python
# Test evidence verification
def verify_test_evidence(evidence_string):
    parts = evidence_string.split(':')
    test_type, command, result, coverage = parts[1:5]
    
    # Verify test command is valid
    if not is_valid_test_command(command):
        return False, f"Invalid test command: {command}"
    
    # Verify result format
    if '/' not in result:
        return False, f"Invalid result format: {result}"
    
    passed, total = map(int, result.split('/'))
    if passed > total:
        return False, f"Passed tests ({passed}) cannot exceed total ({total})"
    
    return True, "Test evidence verified"
```
```

### Evidence Chain Validation
```markdown
## EVIDENCE TRACEABILITY

### Chain of Evidence
```markdown
**Requirement** → **Design Decision** → **Implementation** → **Test** → **Validation**

Example Chain:
1. `business:requirement:oauth2_authentication:validated:stakeholder_interview`
2. `design:architecture:oauth2_provider_abstraction:documented:technical_spec`
3. `code:implemented:/src/auth/OAuth2Provider.ts:1-156:OAuth2 provider implementation`
4. `test:unit:npm test oauth2:15/15:coverage:98.2%:validation_complete`
5. `business:acceptance:oauth2_login:approved:user_testing`
```

### Evidence Dependencies
```markdown
## DEPENDENCY MAPPING
- **Implementation Evidence** depends on **Design Evidence**
- **Test Evidence** depends on **Implementation Evidence**  
- **Validation Evidence** depends on **Test Evidence**
- **Business Evidence** may depend on **Validation Evidence**

### Validation Rules
- No implementation without design documentation
- No deployment without test evidence
- No acceptance without validation evidence
- Critical features require complete evidence chain
```
```

---

## 🎯 EVIDENCE QUALITY STANDARDS

### Evidence Completeness Metrics
```markdown
## COMPLETENESS SCORING

### Minimum Evidence Requirements (by phase)
**Discovery Phase**:
- System investigation: ≥3 evidence items
- Requirement validation: ≥1 stakeholder confirmation
- Feasibility assessment: ≥1 technical proof-of-concept

**Planning Phase**:
- Architecture decisions: ≥2 design documents with rationale
- Technical specifications: ≥1 detailed spec per major component
- Implementation strategy: ≥1 phasing plan with dependencies

**Execution Phase**:
- Code evidence: 1 evidence item per significant change
- Test evidence: 1 evidence item per implemented feature
- Quality evidence: ≥1 quality scan per development cycle

**Verification Phase**:  
- Functional validation: 1 evidence item per acceptance criterion
- Quality confirmation: ≥3 quality metrics with targets
- Integration validation: ≥1 system-level test suite

### Quality Scoring Algorithm
```python
def calculate_evidence_quality_score(evidence_list):
    completeness = len(evidence_list) / required_evidence_count
    verifiability = verified_evidence_count / len(evidence_list)
    recency = avg_evidence_age_days / max_acceptable_age_days
    traceability = linked_evidence_count / total_evidence_count
    
    quality_score = (completeness * 0.3 + 
                    verifiability * 0.3 + 
                    (1 - recency) * 0.2 + 
                    traceability * 0.2) * 100
    
    return min(quality_score, 100)
```
```

### Evidence Freshness Standards
```markdown
## FRESHNESS REQUIREMENTS

### Maximum Age Limits
- **Code Evidence**: 7 days for active development
- **Test Evidence**: 24 hours after code changes
- **Quality Evidence**: 72 hours for CI/CD cycles
- **Business Evidence**: 30 days for stakeholder feedback

### Refresh Triggers
- Any code change invalidates dependent test evidence
- Architecture changes invalidate implementation evidence
- Requirement changes invalidate all downstream evidence
- Tool/environment changes invalidate quality evidence
```

---

## 🔄 EVIDENCE LIFECYCLE MANAGEMENT

### Evidence Archival
```markdown
## ARCHIVAL STRATEGY

### Active Evidence (Current Sprint)
- Stored in session state
- Linked to current development work
- Actively validated and updated

### Historical Evidence (Previous Sprints)
- Archived with project documentation
- Maintained for traceability
- Accessible for reference but not actively validated

### Evidence Retention Policy
- **Code Evidence**: Retain with version control indefinitely
- **Test Evidence**: Retain latest + major milestone results
- **Quality Evidence**: Retain trend data, archive detailed reports after 90 days
- **Business Evidence**: Retain all stakeholder validations indefinitely
```

### Evidence Migration
```markdown
## MIGRATION PROTOCOLS

### Framework Version Updates
- Map old evidence formats to new standards
- Validate migrated evidence for accuracy
- Document any evidence lost in migration
- Maintain backward compatibility for 2 major versions

### Project Handover
- Package all evidence with project documentation
- Create evidence summary for new team
- Validate evidence accessibility and completeness
- Train new team on evidence interpretation
```

---

**🎯 PROVE WITH PRECISION. VERIFY WITH RIGOR. TRACE WITH CLARITY.**
