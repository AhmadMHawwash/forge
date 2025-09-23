# BUG INVESTIGATION & RESOLUTION PLAYBOOK

**🎯 MISSION BRIEF**: *[Replace this line with your specific bug report, e.g., "Users report authentication failing intermittently on mobile devices"]*

---

## 📋 OPERATIONAL FRAMEWORK

You are now operating under the **Feature Development Agent Doctrine** (see `@core-doctrine.md`) in **CRITICAL INCIDENT MODE**. Your mission is to rapidly identify, understand, and resolve the reported issue while maintaining system stability.

For enhanced investigation, consider combining with:
- `@concise-communication.md` for rapid status updates
- `@security-first.md` for security-related incidents
- `@critical-review.md` for validating assumptions under pressure

### EXECUTION PHASES

1. **🚨 TRIAGE** - Assess severity and gather initial evidence
2. **🔍 INVESTIGATE** - Deep dive into root cause analysis
3. **🛠️ RESOLVE** - Implement and test the fix
4. **✅ VERIFY** - Validate resolution and prevent regression
5. **📚 DOCUMENT** - Capture learnings and improve prevention

---

## 🚨 PHASE 1: TRIAGE & INITIAL ASSESSMENT

### PRIMARY OBJECTIVES
- [ ] Assess bug severity and impact on users/system
- [ ] Gather initial evidence and reproduction steps
- [ ] Determine immediate containment needs
- [ ] Establish investigation priorities

### TRIAGE PROTOCOL

**Step 1: Severity Assessment**
- Classify impact: Critical/High/Medium/Low
- Estimate affected user percentage
- Assess business impact and urgency
- Determine if immediate hotfix is needed

**Step 2: Evidence Gathering**
- Collect detailed bug description and context
- Gather reproduction steps and environment details
- Review recent changes and deployment history
- Check monitoring dashboards and error logs

**Step 3: Initial Containment**
- Assess if immediate action is needed to prevent further damage
- Consider temporary workarounds or feature toggles
- Alert relevant stakeholders if critical
- Document current system state

### DELIVERABLE: TRIAGE REPORT

```markdown
## 🚨 TRIAGE REPORT

### Bug Classification
- **Severity Level**: [Critical/High/Medium/Low]
- **Impact Assessment**: [User/business impact description]
- **Affected Users**: [Percentage or number estimate]
- **Urgency**: [Immediate/High/Normal]

### Initial Evidence
- **Bug Description**: [Detailed symptom description]
- **Reproduction Steps**: [Step-by-step to reproduce]
- **Environment**: [Browser/OS/device specifics]
- **First Occurrence**: [When bug was first reported/noticed]

### Recent Changes Analysis
- **Recent Deployments**: [Last 48-72 hours]
- **Configuration Changes**: [Infrastructure/settings modifications]
- **Dependency Updates**: [Library/service updates]
- **Related Features**: [Recently modified functionality]

### Immediate Actions Taken
- **Containment Measures**: [Any immediate fixes applied]
- **Monitoring Status**: [Additional monitoring activated]
- **Stakeholder Notifications**: [Who was informed]

### Investigation Priority: 🔴 Critical / 🟡 High / 🟢 Normal
[Rationale for priority level]
```

---

## 🔍 PHASE 2: ROOT CAUSE INVESTIGATION

### PRIMARY OBJECTIVES
- [ ] Reproduce the bug reliably in controlled environment
- [ ] Trace the issue through the entire system stack
- [ ] Identify the exact root cause and contributing factors
- [ ] Assess scope of impact and related vulnerabilities

### INVESTIGATION PROTOCOL

**Step 1: Reproduction & Isolation**
- Set up controlled environment matching production
- Execute reproduction steps systematically
- Isolate variables to identify trigger conditions
- Document exact conditions that cause the issue

**Step 2: System Trace Analysis**
- Examine application logs and error traces
- Review database queries and performance metrics
- Analyze network requests and API responses
- Check infrastructure and system resource usage

**Step 3: Code Path Analysis**
- Trace the code execution path to the failure point
- Review relevant code changes and recent commits
- Examine related components and dependencies
- Identify design flaws or implementation issues

**Step 4: Root Cause Identification**
- Determine the fundamental cause (not just symptoms)
- Identify contributing factors and conditions
- Assess if this is an isolated incident or systematic issue
- Map potential related vulnerabilities

### INVESTIGATION TOOLS & TECHNIQUES

**Logging & Monitoring**
- Application logs with appropriate log levels
- Database query logs and performance metrics
- Infrastructure monitoring (CPU, memory, network)
- APM tools for distributed tracing

**Debugging Techniques**
- Step-through debugging in controlled environment
- Print/log debugging for complex async operations
- Performance profiling for timing-related issues
- Network analysis for API/service integration bugs

**Static Analysis**
- Code review of suspect areas
- Dependency analysis for version conflicts
- Security scanning for vulnerability-related bugs
- Automated testing to identify regression scope

### DELIVERABLE: ROOT CAUSE ANALYSIS

```markdown
## 🔍 ROOT CAUSE ANALYSIS

### Reproduction Confirmation
- **Reproduction Success**: [✅ Reliably reproduced / ⚠️ Intermittent]
- **Environment Used**: [Development/staging/production clone]
- **Trigger Conditions**: [Exact conditions that cause the bug]
- **Failure Pattern**: [When and how it fails]

### Technical Investigation
- **Error Traces**: [Key log entries and stack traces]
- **Code Path Analysis**: [Execution flow to failure point]
- **Database Impact**: [Query performance, data integrity issues]
- **System Resources**: [Memory leaks, CPU spikes, etc.]

### Root Cause Identification
- **Primary Cause**: [The fundamental issue causing the bug]
- **Contributing Factors**: [Conditions that enable or worsen the bug]
- **Code Location**: [Specific files/functions/lines involved]
- **Introduced When**: [Change/deployment that introduced the issue]

### Impact Assessment
- **Affected Components**: [All system parts impacted]
- **Data Integrity**: [Any data corruption or loss risk]
- **Security Implications**: [Potential security vulnerabilities]
- **Performance Impact**: [System performance effects]

### Related Vulnerabilities
- **Similar Issues**: [Other areas with same pattern]
- **Preventable by**: [What could have caught this earlier]
- **Risk of Recurrence**: [Likelihood of similar bugs]

### Fix Strategy Ready: ✅/⚠️
[Confidence in root cause and proposed solution approach]
```

---

## 🛠️ PHASE 3: RESOLUTION IMPLEMENTATION

### PRIMARY OBJECTIVES
- [ ] Design and implement targeted fix for root cause
- [ ] Ensure fix doesn't introduce new issues or regressions
- [ ] Test fix thoroughly in isolated environment
- [ ] Prepare safe deployment strategy

### RESOLUTION PROTOCOL

**Step 1: Solution Design**
- Design minimal fix targeting root cause specifically
- Consider alternative approaches and their trade-offs
- Plan for backward compatibility and migration needs
- Design rollback strategy in case fix causes issues

**Step 2: Implementation Standards**
- Implement fix following established coding standards
- Add comprehensive error handling and logging
- Include detailed comments explaining the fix
- Ensure fix is as minimal and safe as possible

**Step 3: Testing Strategy**
- Create specific test cases that reproduce the original bug
- Test the fix against all identified trigger conditions
- Run comprehensive regression test suite
- Test edge cases and boundary conditions

**Step 4: Deployment Preparation**
- Prepare deployment scripts and procedures
- Plan gradual rollout strategy if appropriate
- Set up enhanced monitoring for the fix
- Document rollback procedures

### RESOLUTION EVIDENCE

```markdown
## 🛠️ RESOLUTION IMPLEMENTATION

### Solution Design
- **Fix Approach**: [Detailed description of the solution]
- **Alternative Considered**: [Other approaches evaluated]
- **Trade-offs**: [Benefits and risks of chosen approach]
- **Rollback Strategy**: [How to undo the fix if needed]

### Implementation Details
- **Files Modified**: [List of changed files with brief description]
- **Code Changes**: [Summary of key changes made]
- **New Dependencies**: [Any libraries or services added]
- **Configuration Changes**: [Environment/settings modifications]

### Testing Results
- **Bug Reproduction Test**: [✅ Original bug no longer occurs]
- **Regression Testing**: [✅ No new issues introduced]
- **Edge Case Testing**: [Results of boundary condition tests]
- **Performance Testing**: [Impact on system performance]

### Deployment Readiness
- **Staging Validation**: [Complete testing in staging environment]
- **Monitoring Setup**: [Additional monitoring for the fix]
- **Rollout Plan**: [Gradual deployment strategy if applicable]

### Fix Quality: ✅ Ready for Production / ⚠️ Needs Additional Work
```

---

## ✅ PHASE 4: VERIFICATION & REGRESSION PREVENTION

### PRIMARY OBJECTIVES
- [ ] Deploy fix safely to production environment
- [ ] Verify complete resolution of reported issue
- [ ] Confirm no new issues introduced
- [ ] Implement measures to prevent regression

### VERIFICATION PROTOCOL

**Step 1: Production Deployment**
- Execute deployment following established procedures
- Monitor system metrics during and after deployment
- Validate fix is active and functioning correctly
- Check that original bug symptoms are resolved

**Step 2: Resolution Validation**
- Test original reproduction steps in production
- Monitor user reports and feedback channels
- Verify metrics show improvement
- Confirm stakeholder satisfaction with resolution

**Step 3: Regression Prevention**
- Add automated tests that would catch this bug type
- Improve monitoring to detect similar issues earlier
- Update code review checklist if applicable
- Document lessons learned for team knowledge

### VERIFICATION DELIVERABLE

```markdown
## ✅ VERIFICATION & PREVENTION

### Production Deployment
- **Deployment Time**: [When fix was deployed]
- **Deployment Method**: [Rolling/blue-green/hotfix]
- **Monitoring Status**: [System health post-deployment]
- **Immediate Issues**: [Any problems detected during deployment]

### Resolution Confirmation
- **Bug Status**: [✅ Completely resolved / ⚠️ Partially resolved]
- **User Feedback**: [Reports from affected users]
- **Metrics Improvement**: [Quantifiable improvement in error rates, etc.]
- **Stakeholder Sign-off**: [Confirmation from product/business team]

### Regression Prevention Measures
- **Automated Tests Added**: [Test cases that prevent this bug recurring]
- **Monitoring Enhancements**: [New alerts or metrics added]
- **Process Improvements**: [Code review, deployment, or testing improvements]
- **Documentation Updates**: [Knowledge base or troubleshooting guides]

### Mission Status: ✅ COMPLETED / ⚠️ PARTIAL RESOLUTION
```

---

## 📚 PHASE 5: DOCUMENTATION & LEARNING

### PRIMARY OBJECTIVES
- [ ] Document complete investigation and resolution process
- [ ] Capture lessons learned for future prevention
- [ ] Update troubleshooting and operational guides
- [ ] Share knowledge with development team

### DOCUMENTATION PROTOCOL

**Step 1: Incident Documentation**
- Create comprehensive incident report
- Document timeline of events and actions taken
- Record all evidence and analysis performed
- Document final resolution and verification

**Step 2: Knowledge Capture**
- Update troubleshooting guides with new information
- Add to known issues and solutions database
- Document new monitoring or alerting configurations
- Create post-mortem if warranted by severity

**Step 3: Process Improvement**
- Identify what could have prevented this issue
- Recommend improvements to development/testing processes
- Update team coding standards or guidelines
- Propose tooling or automation improvements

### LEARNING DELIVERABLE

```markdown
## 📚 LEARNING & DOCUMENTATION

### Incident Summary
- **Bug Description**: [One-line summary of the issue]
- **Root Cause**: [Fundamental cause identified]
- **Resolution**: [How the issue was fixed]
- **Total Resolution Time**: [From report to production fix]

### Timeline of Events
- **Initial Report**: [When and how bug was first reported]
- **Investigation Started**: [When technical investigation began]
- **Root Cause Found**: [When actual cause was identified]
- **Fix Implemented**: [When solution was coded and tested]
- **Production Resolution**: [When fix was deployed and verified]

### Lessons Learned
- **What Went Well**: [Effective processes and responses]
- **What Could Improve**: [Areas for better handling]
- **Prevention Opportunities**: [What could have caught this earlier]
- **Process Gaps**: [Missing procedures or tools identified]

### Knowledge Assets Created
- **Documentation Updated**: [Troubleshooting guides, runbooks]
- **Test Cases Added**: [Automated tests preventing regression]
- **Monitoring Improved**: [New alerts or dashboards]
- **Team Knowledge**: [Information shared with development team]

### Recommended Actions
- **Immediate Improvements**: [Quick wins to implement]
- **Longer-term Enhancements**: [Strategic improvements to consider]
- **Process Changes**: [Development or deployment process updates]
- **Tool/Infrastructure**: [Technology improvements to prevent similar issues]
```

---

## 🚨 ESCALATION TRIGGERS

**Escalate immediately when:**
- Unable to reproduce the bug after thorough investigation
- Root cause requires system architecture changes beyond bug scope
- Fix would require breaking changes or major refactoring
- Security vulnerability discovered requiring immediate attention
- Issue affects critical business operations and can't be quickly resolved
- Multiple attempts at resolution have failed

**When escalating, provide:**
- Complete investigation summary with all evidence
- Attempted solutions and their outcomes
- Assessment of business impact and urgency
- Specific expertise or resources needed to proceed
- Recommended escalation path and timeline

---

## 📊 SUCCESS CRITERIA

This mission is successful when:
- ✅ Root cause is definitively identified and understood
- ✅ Fix is implemented and deployed to production safely
- ✅ Original bug symptoms are completely resolved
- ✅ No regressions or new issues introduced
- ✅ Automated tests prevent this bug type from recurring
- ✅ Documentation is updated for future reference
- ✅ Team knowledge is enhanced to prevent similar issues

---

## 🔄 COMMUNICATION PROTOCOL

### Status Updates
- **🔴 Critical**: Hourly updates to stakeholders
- **🟡 High**: Daily updates with progress summary  
- **🟢 Normal**: Updates at phase completion

### Stakeholder Communication
- Product/business teams: Impact and timeline updates
- Development team: Technical details and learnings
- Operations team: Infrastructure and monitoring changes
- Users: Status updates through appropriate channels

---

**🎯 INVESTIGATE WITH RIGOR. RESOLVE WITH PRECISION. PREVENT WITH WISDOM.**
