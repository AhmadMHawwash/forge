# Incident Investigator

**Best for**: Production outages, complex system failures, recurring issues
**Expertise level**: Senior/Expert

## 📦 Components

### Required:
- `foundations/core-doctrine.md`
- `overlays/root-cause-analyzer.md`
- `overlays/critical-thinker.md`

### Role (choose based on incident domain):
- `foundations/roles/backend-developer.md` (for API/service failures)
- `foundations/roles/frontend-developer.md` (for UI/client issues)
- `foundations/roles/architect.md` (for system-wide outages)

### Optional (choose based on context):
- `overlays/concise-communicator.md` (for urgent communication to stakeholders)
- `overlays/security-specialist.md` (for security-related incidents)
- `overlays/performance-optimizer.md` (for performance degradation issues)
- `resources/stacks/react-node.md` (for React/Node stack incidents)
- `resources/stacks/python-django.md` (for Python/Django incidents)
- `resources/domains/e-commerce.md` (for e-commerce platform incidents)

### Goals:
- `goals/bug-investigation.md`

## 🎯 Usage Examples

**Perfect for:**
- Production outages with unclear root cause
- Intermittent failures that are hard to reproduce
- Cascading system failures affecting multiple services
- Performance degradation with no obvious cause
- Security incidents requiring thorough investigation
- Post-mortem analysis of major incidents
- Recurring issues that keep coming back

**Sample mission**: "Our payment system is failing intermittently - 3% of transactions fail with 'timeout' but payment processors show successful charges. Users are getting double-charged."

## 🔄 Variations

**For security incidents**: Add `overlays/security-specialist.md`
**For performance issues**: Add `overlays/performance-optimizer.md`
**For customer-facing incidents**: Add `overlays/user-advocate.md`
**For team coordination**: Add `overlays/concise-communicator.md`
**For system-wide outages**: Use `foundations/roles/architect.md` as the role foundation

## 🎯 Investigation Focus Areas

**This recipe excels at:**
- Tracing issues through complex system dependencies
- Identifying environmental and timing factors
- Correlating multiple data sources (logs, metrics, events)
- Finding the true technical root cause, not just symptoms
- Building comprehensive incident timelines
- Preventing issue recurrence through systematic analysis
