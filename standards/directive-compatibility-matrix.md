# DIRECTIVE COMPATIBILITY MATRIX

**🎯 PURPOSE**: Guide safe and effective directive combinations to prevent conflicts and maximize framework effectiveness.

---

## 📊 COMPATIBILITY MATRIX

### Base Playbook Compatibility

| Playbook | Compatible Directives | Conflicting Directives | Notes |
|----------|----------------------|------------------------|-------|
| **feature-request.md** | testing-focus + security-first | concise-communication (reduces planning detail) | Use concise only for status updates in long projects |
| **bug-investigation.md** | concise-communication + security-first | testing-focus (slows emergency response) | Testing focus acceptable for non-critical bugs |
| **code-review.md** | testing-focus + security-first + concise-communication | None (all complement refactoring) | All directives enhance code improvement goals |
| **retrospective.md** | concise-communication | testing-focus + security-first (irrelevant to analysis) | Focus on communication efficiency for retrospectives |

### Directive-to-Directive Compatibility

| Primary Directive | Secondary Directive | Compatibility | Reasoning |
|-------------------|---------------------|---------------|-----------|
| **concise-communication** | testing-focus | ⚠️ CONDITIONAL | Conflicts during planning/design phases; compatible during execution |
| **concise-communication** | security-first | ✅ COMPATIBLE | Security analysis can be communicated concisely |
| **concise-communication** | strategic-tactical | ⚠️ CONDITIONAL | Strategic analysis needs detail, tactical execution can be concise |
| **concise-communication** | critical-review | ❌ CONFLICTING | Critical analysis requires detailed explanation |
| **testing-focus** | security-first | ✅ SYNERGISTIC | Security testing is critical; both enhance quality |
| **testing-focus** | strategic-tactical | ✅ COMPATIBLE | Quality strategy aligns with strategic thinking |
| **testing-focus** | critical-review | ✅ SYNERGISTIC | Critical review enhances testing rigor |
| **security-first** | strategic-tactical | ✅ COMPATIBLE | Security constraints enhance strategic analysis |
| **security-first** | critical-review | ✅ SYNERGISTIC | Critical review enhances security validation |
| **strategic-tactical** | critical-review | ✅ SYNERGISTIC | Critical analysis enhances strategic decision quality |

---

## 🎯 RECOMMENDED COMBINATIONS

### High-Value Combinations

#### 🥇 **The Quality Triad**
**Combination**: `testing-focus + security-first + feature-request`
**When to Use**: Mission-critical features, financial systems, healthcare applications
**Benefits**: Maximum quality assurance with comprehensive security coverage
**Token Cost**: HIGH (~12,000 tokens)
```markdown
# Use for:
- Payment processing systems
- Authentication/authorization features  
- Medical record management
- Financial reporting systems
```

#### 🥈 **The Emergency Response**
**Combination**: `concise-communication + security-first + bug-investigation`
**When to Use**: Production security incidents, critical system failures
**Benefits**: Rapid response with security focus and efficient communication
**Token Cost**: MEDIUM (~8,000 tokens)
```markdown
# Use for:
- Security breach investigations
- Authentication system failures
- Data integrity issues
- Compliance violations
```

#### 🥉 **The Efficiency Stack**
**Combination**: `concise-communication + code-review`
**When to Use**: Routine code improvements, technical debt reduction
**Benefits**: Fast iteration with clear progress tracking
**Token Cost**: LOW (~6,000 tokens)
```markdown
# Use for:
- Regular refactoring sessions
- Code quality improvements
- Documentation updates
- Performance optimizations
```

### Context-Specific Combinations

#### 🔒 **Security-Critical Development**
```markdown
**Base**: feature-request.md
**Directives**: security-first + testing-focus
**Avoid**: concise-communication (security requires detailed analysis)
**Best For**: Auth systems, payment processing, sensitive data handling
```

#### ⚡ **Rapid Response Mode**
```markdown
**Base**: bug-investigation.md  
**Directives**: concise-communication
**Avoid**: testing-focus (slows emergency response)
**Best For**: Production outages, critical bugs, system failures
```

#### 🧪 **Quality-First Development**
```markdown
**Base**: feature-request.md
**Directives**: testing-focus + (optionally) security-first
**Avoid**: concise-communication during planning phases
**Best For**: Core business logic, APIs, data processing systems
```

---

## ⚠️ CONFLICT RESOLUTION GUIDELINES

### Directive Conflicts and Solutions

#### **Conflict 1**: Concise Communication vs. Comprehensive Analysis
**Problem**: Concise directive reduces detail, but complex features need thorough analysis
**Solution**: 
```markdown
# Phase-Based Application
- Phases 1-2 (Investigate/Plan): Standard communication
- Phases 3-5 (Execute/Verify/Retrospect): Concise communication
- Status updates: Always concise
```

#### **Conflict 2**: Speed vs. Quality
**Problem**: Emergency response needs speed, but quality directives slow down
**Solution**:
```markdown
# Urgency-Based Priority
IF urgency = CRITICAL:
  - Skip testing-focus for immediate resolution
  - Add testing-focus for follow-up hardening
IF urgency = HIGH:
  - Streamlined testing (critical paths only)
  - Full security analysis
IF urgency = NORMAL:
  - Full testing + security directives
```

#### **Conflict 3**: Token Limits vs. Comprehensive Coverage
**Problem**: Multiple directives exceed token limits
**Solution**:
```markdown
# Progressive Enhancement
1. Start with core-doctrine.md + base playbook
2. Add highest-priority directive
3. If token budget allows, add secondary directive
4. Document which directives were omitted and why
```

---

## 🎛️ ADAPTIVE COMBINATION RULES

### Project Context Rules
```markdown
## CONTEXT-BASED SELECTION

**Startup/MVP Context**:
- Prioritize: Speed and core functionality
- Recommended: concise-communication + streamlined playbooks
- Avoid: Complex directive combinations

**Enterprise Context**:
- Prioritize: Security, compliance, documentation
- Recommended: security-first + testing-focus + comprehensive documentation
- Accept: Higher token costs for thorough coverage

**Open Source Context**:
- Prioritize: Code quality, documentation, community standards
- Recommended: testing-focus + enhanced documentation
- Consider: Community feedback integration
```

### Team Maturity Rules
```markdown
## TEAM-BASED SELECTION

**Junior Team**:
- Use: Single directive maximum
- Focus: Clear guidance and education
- Avoid: Complex directive interactions

**Senior Team**:
- Use: Multiple directives as needed
- Focus: Efficiency and advanced patterns
- Leverage: Full framework capabilities

**Mixed Team**:
- Use: Directive selection based on task complexity
- Focus: Knowledge transfer and skill development
- Balance: Guidance for juniors, efficiency for seniors
```

---

## 🔧 VALIDATION CHECKLIST

### Before Applying Directive Combination
```markdown
## PRE-APPLICATION VALIDATION
- [ ] **Token Budget**: Total tokens < 15,000 for optimal performance
- [ ] **Urgency Check**: Directive complexity matches urgency level
- [ ] **Team Capability**: Team can effectively use selected directives
- [ ] **Project Context**: Directives align with project requirements
- [ ] **Conflict Resolution**: Any conflicts have documented resolution
```

### During Application
```markdown
## ACTIVE MONITORING
- [ ] **Performance**: Response quality meets expectations
- [ ] **Efficiency**: Progress matches estimated velocity
- [ ] **Clarity**: AI agent follows directives without confusion
- [ ] **Value**: Directive combination provides expected benefits
```

### Post-Application
```markdown
## EFFECTIVENESS REVIEW
- [ ] **Outcome Quality**: Results meet or exceed standard approach
- [ ] **Efficiency Gains**: Time/effort savings achieved
- [ ] **Conflict Occurrence**: Note any unexpected directive interactions
- [ ] **Recommendations**: Update matrix based on experience
```

---

## 📈 COMBINATION EFFECTIVENESS METRICS

### Success Indicators
```markdown
## POSITIVE SIGNALS
- Faster development cycles
- Higher code quality metrics
- Reduced rework requirements
- Improved stakeholder satisfaction
- Clearer progress tracking

## WARNING SIGNALS  
- AI agent confusion or contradictory responses
- Excessive token usage without value
- Slower progress than baseline
- Increased clarification requests
- Conflicting guidance within same response
```

### Performance Benchmarks
```markdown
## BASELINE COMPARISONS
**Framework Only** (playbook + core-doctrine):
- Token Usage: ~4,000
- Session Quality: Baseline
- Development Speed: Baseline

**Single Directive Addition**:
- Token Usage: ~6,000-8,000
- Expected Quality Improvement: 15-25%
- Expected Speed Impact: 0-10% slower

**Multiple Directive Combination**:
- Token Usage: ~10,000-15,000
- Expected Quality Improvement: 25-40%  
- Expected Speed Impact: 10-20% slower initially, 20-30% faster over project lifecycle
```

---

## 🎯 OPTIMAL COMBINATION QUICK REFERENCE

```markdown
## QUICK SELECTION GUIDE

**Need Speed**: concise-communication only
**Need Quality**: testing-focus + security-first  
**Need Security**: security-first + appropriate base playbook
**Emergency**: concise-communication + bug-investigation playbook
**Complex Feature**: testing-focus + feature-request playbook
**Legacy Code**: testing-focus + code-review playbook
**Team Learning**: standard playbooks without directives
```

---

**🎯 COMBINE WISELY. AVOID CONFLICTS. MAXIMIZE EFFECTIVENESS.**
