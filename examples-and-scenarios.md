# Framework Usage Examples & Scenarios

This document provides comprehensive examples of how to use the Feature Development Prompt Framework effectively across different development scenarios.

---

## 🎯 Core Framework Usage Patterns

### Pattern 1: Standard Feature Development
**When to use:** Building new functionality, implementing user stories, adding features

**Setup:**
```
1. Install core-doctrine.md as global rule
2. Copy feature-request.md
3. Replace mission brief with your specific feature
4. Optional: Add directive based on requirements
```

**Example Mission Brief:**
```
🎯 MISSION BRIEF: Implement user profile management system with avatar upload, preference settings, and activity history
```

### Pattern 2: Critical Bug Resolution
**When to use:** Production issues, complex debugging, system failures

**Setup:**
```
1. Use bug-investigation.md
2. Add concise-communication.md for rapid status updates
3. Include specific error details and reproduction steps
```

**Example Mission Brief:**
```
🎯 MISSION BRIEF: Payment processing fails intermittently with "Gateway timeout" errors affecting 15% of transactions since yesterday's deployment
```

### Pattern 3: Quality-Focused Refactoring
**When to use:** Technical debt reduction, code modernization, architecture improvements

**Setup:**
```
1. Use code-review.md
2. Add testing-focus.md for comprehensive test coverage
3. Optional: Add security-first.md for security-sensitive code
```

**Example Mission Brief:**
```
🎯 MISSION BRIEF: Refactor legacy authentication module to support modern security standards and improve maintainability
```

---

## 📚 Detailed Scenario Examples

### Scenario 1: E-commerce Feature Development

**Context:** Adding a product recommendation system to an e-commerce platform

**Framework Setup:**
- **Base:** `feature-request.md`
- **Enhancement:** `testing-focus.md` (ML features need comprehensive testing)

**Complete Prompt:**
```markdown
🎯 MISSION BRIEF: Implement intelligent product recommendation system using collaborative filtering and user behavior analysis

## 📋 OPERATIONAL FRAMEWORK

You are now operating under the **Feature Development Agent Doctrine**. Your mission is to deliver a production-ready feature that meets user needs while maintaining system integrity.

[... full feature-request.md content ...]

# TESTING-FOCUSED DEVELOPMENT DIRECTIVE

This optional directive enhances the Feature Development Agent to prioritize test-driven development...

[... full testing-focus.md content ...]
```

**Expected Agent Workflow:**
1. **Discovery**: Analyze current product catalog, user behavior data, existing recommendation logic
2. **Design**: Plan ML pipeline, API endpoints, performance requirements, A/B testing strategy
3. **Implementation**: Build recommendation engine with comprehensive unit/integration tests
4. **Verification**: Validate accuracy metrics, performance benchmarks, A/B test framework
5. **Deployment**: Gradual rollout with monitoring and feedback collection

---

### Scenario 2: Security Incident Response

**Context:** Investigating potential security vulnerability in user authentication

**Framework Setup:**
- **Base:** `bug-investigation.md`
- **Enhancement:** `security-first.md` + `concise-communication.md`

**Complete Prompt:**
```markdown
🎯 MISSION BRIEF: Investigate reports of users gaining unauthorized access to other accounts through session manipulation

## 📋 OPERATIONAL FRAMEWORK

You are now operating under the **Feature Development Agent Doctrine** in **CRITICAL INCIDENT MODE**...

[... full bug-investigation.md content ...]

# SECURITY-FIRST DEVELOPMENT DIRECTIVE

This optional directive enhances the Feature Development Agent to prioritize security-by-design...

[... full security-first.md content ...]

# CONCISE COMMUNICATION DIRECTIVE

This optional directive modifies the Feature Development Agent's communication style...

[... full concise-communication.md content ...]
```

**Expected Agent Workflow:**
1. **Triage**: Assess security impact, contain potential breach, gather evidence
2. **Investigation**: Analyze session handling, authentication flows, access logs
3. **Resolution**: Implement security patches, enhance monitoring, update controls
4. **Verification**: Security testing, penetration testing, compliance validation
5. **Documentation**: Incident report, security improvements, prevention measures

---

### Scenario 3: Performance Optimization Project

**Context:** Improving application response times for high-traffic endpoints

**Framework Setup:**
- **Base:** `code-review.md`
- **Enhancement:** `testing-focus.md` (performance testing critical)

**Complete Prompt:**
```markdown
🎯 MISSION BRIEF: Optimize checkout API endpoints to reduce average response time from 1.2s to <300ms while maintaining reliability

[... combined playbook and directive content ...]
```

**Expected Agent Workflow:**
1. **Audit**: Analyze current performance metrics, identify bottlenecks, map optimization opportunities
2. **Plan**: Design optimization strategy, establish performance benchmarks, plan testing approach
3. **Refactor**: Implement database optimizations, caching strategies, code improvements
4. **Validate**: Performance testing, load testing, regression validation
5. **Document**: Performance improvements, monitoring setup, maintenance guidelines

---

## 🔧 Advanced Framework Customization

### Custom Directive: API-First Development

**When to create:** Your team follows API-first development practices

**Directive Content Example:**
```markdown
# API-FIRST DEVELOPMENT DIRECTIVE

## API Design Requirements
- OpenAPI specification must be created before implementation
- API versioning strategy must be documented
- Rate limiting and authentication must be designed upfront
- Consumer impact analysis required for all changes

## Implementation Protocol
1. Design API contract with stakeholder review
2. Generate client SDKs and documentation
3. Implement server-side with contract testing
4. Validate with consumer integration testing
```

### Custom Playbook: Database Migration

**When to create:** Frequent database schema changes in your project

**Playbook Structure:**
```markdown
# DATABASE MIGRATION PLAYBOOK

🎯 MISSION BRIEF: [Replace with specific migration requirement]

## PHASES
1. SCHEMA ANALYSIS - Current state and migration requirements
2. MIGRATION DESIGN - Safe migration strategy with rollback plan
3. IMPLEMENTATION - Migration scripts with validation
4. EXECUTION - Staged deployment with monitoring
5. VALIDATION - Data integrity and performance verification
```

---

## 📊 Measuring Framework Effectiveness

### Key Performance Indicators

**Development Velocity:**
- Time from feature request to production deployment
- Reduction in rework and bug fixes post-deployment
- Increase in first-time implementation success rate

**Quality Metrics:**
- Test coverage improvements
- Production defect reduction
- Code review feedback quality
- Documentation completeness

**Team Effectiveness:**
- Reduced context switching and clarification requests
- Improved knowledge transfer and onboarding
- Enhanced architectural decision documentation
- Better cross-team collaboration

### Success Story Template

**Before Framework:**
```
Project: User Dashboard Redesign
Timeline: 3 weeks planned, 5 weeks actual
Issues: 
- Requirements clarification took 1 week
- 2 major reworks due to missed edge cases
- Performance issues discovered in production
- Insufficient testing led to rollback
```

**After Framework:**
```
Project: User Dashboard Redesign v2
Timeline: 3 weeks planned, 2.5 weeks actual
Improvements:
- Discovery phase identified all requirements upfront
- Systematic testing prevented production issues
- Performance benchmarks validated throughout
- Comprehensive documentation enabled smooth rollout
```

---

## 🎓 Learning Path for Framework Mastery

### Week 1: Foundation
- Install core doctrine and practice with simple features
- Use basic playbooks without directives
- Focus on following the phase-based methodology

### Week 2: Enhanced Usage
- Experiment with different directive combinations
- Practice bug investigation and code review playbooks
- Start customizing prompts for your specific context

### Week 3: Advanced Patterns
- Create project-specific directive modules
- Integrate framework with your CI/CD pipeline
- Develop team standards and customizations

### Week 4: Optimization
- Analyze retrospective data for improvement opportunities
- Refine your framework setup based on experience
- Share learnings and best practices with your team

---

## 🚫 Common Pitfalls and How to Avoid Them

### Pitfall 1: Skipping the Discovery Phase
**Problem:** Rushing into implementation without understanding requirements
**Solution:** Always complete the discovery phase fully, even for "simple" changes
**Framework Fix:** The doctrine enforces this through mandatory reconnaissance protocols

### Pitfall 2: Ignoring Quality Gates
**Problem:** Deploying without proper testing and validation
**Solution:** Use testing-focus directive and enforce verification checklists
**Framework Fix:** Quality gates are built into every playbook phase

### Pitfall 3: Poor Communication During Development
**Problem:** Stakeholders lack visibility into progress and decisions
**Solution:** Use concise communication directive for regular status updates
**Framework Fix:** Structured reporting templates ensure consistent communication

### Pitfall 4: Not Learning from Experience
**Problem:** Repeating the same mistakes across projects
**Solution:** Always conduct retrospectives and update the framework
**Framework Fix:** Retrospective playbook captures and applies learnings systematically

---

## 🔄 Framework Evolution Examples

### Community Contribution: Mobile-First Directive
```markdown
# MOBILE-FIRST DEVELOPMENT DIRECTIVE

## Mobile-Specific Requirements
- Responsive design validation across device sizes
- Touch interaction testing and accessibility
- Performance optimization for mobile networks
- App store compliance for hybrid applications

## Testing Enhancement
- Device emulation testing requirements
- Network condition simulation
- Battery usage and performance monitoring
- Cross-platform compatibility validation
```

### Team-Specific: Microservices Playbook
```markdown
# MICROSERVICE DEVELOPMENT PLAYBOOK

## Service Design Phase
- Domain boundary analysis and service decomposition
- API contract design with versioning strategy
- Inter-service communication patterns
- Data consistency and transaction management

## Implementation Standards
- Service mesh integration requirements
- Observability and monitoring setup
- Circuit breaker and resilience patterns
- Container orchestration and deployment
```

---

**🎯 Master the framework through practice. Adapt it to your needs. Share your improvements with the community.**
