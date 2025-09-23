# COMPLEXITY-ADAPTIVE FRAMEWORK VARIANTS

**🎯 PURPOSE**: Scale framework depth and rigor appropriately to match task complexity, avoiding over-engineering for simple tasks while ensuring adequate coverage for complex projects.

**Core Integration:** `@core-doctrine.md`
**Playbook Selection:** `@feature-request.md` `@bug-investigation.md` `@code-review.md` `@retrospective.md`
**Automated Routing:** `@automation/prompt-router.md` `@standards/validation-systems.md`

---

## 📊 COMPLEXITY ASSESSMENT

### Task Classification

**🟢 SIMPLE** (< 1 day): Single file, no dependencies, clear requirements
- Bug fixes, config updates, documentation, styling changes

**🟡 MEDIUM** (1-5 days): Multiple files, minor integrations, moderate logic
- API endpoints, feature enhancements, schema changes, UI components

**🔴 COMPLEX** (> 5 days): Architecture changes, system integrations, ambiguous requirements  
- Complete features, refactoring projects, new services, security systems

### Assessment Criteria
1. **Files affected**: 1 = Simple, 2-5 = Medium, >5 = Complex
2. **New integrations/dependencies** = +1 level
3. **Architecture changes** = +1 level  
4. **Ambiguous requirements** = +1 level

---

## 🎯 FRAMEWORK VARIANTS

### 🟢 Simple Task Approach
**3-Phase Streamlined**:
1. **Quick Assessment** (5 min): Understand → Plan approach → Define done criteria
2. **Execute** (main work): Implement → Test → Document changes
3. **Close** (5 min): Verify completion → Update documentation

### 🟡 Medium Task Approach  
**5-Phase Standard**:
1. **Investigation** (30-60 min): Requirements → System analysis → Feasibility
2. **Planning** (30-45 min): Architecture → Implementation phases → Quality gates
3. **Execution** (main work): TDD → Incremental delivery → Continuous validation
4. **Validation** (30-60 min): Testing → Quality metrics → Acceptance criteria
5. **Deployment** (15-30 min): Release → Monitor → Document

### 🔴 Complex Task Approach
**5-Phase Enhanced**:
- All standard phases with additional safeguards
- **Multi-session support** via `@session-state-management.md`
- **Enhanced evidence** requirements per `@standards/evidence-standards.md`
- **Quality gates** at each phase boundary
- **Risk mitigation** planning and monitoring

---

## 🔄 ESCALATION PROTOCOLS

### Complexity Re-Assessment
- **Simple → Medium**: Multiple integration points discovered
- **Medium → Complex**: Architecture changes required, ambiguous requirements
- **Any → Escalation**: Security concerns, compliance issues, resource constraints

---

**🎯 Right-size your approach. Optimize for value. Scale with complexity.**
