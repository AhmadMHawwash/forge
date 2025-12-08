# FOUNDATIONS

Role-based identities that define expertise and instincts. Each foundation establishes *who* the AI is for a given task.

## Available Foundations

| Foundation | Focus | Use For |
|------------|-------|---------|
| [Principal Architect](roles/architect.md) | System design, boundaries, contracts | Architecture decisions, integration patterns |
| [Senior Frontend Developer](roles/frontend-developer.md) | UI/UX, accessibility, performance | Client-side features, components |
| [Senior Backend Developer](roles/backend-developer.md) | APIs, services, reliability | Server-side features, integrations |
| [Senior Database Specialist](roles/database-specialist.md) | Schema, queries, migrations | Data modeling, optimization |
| [Senior QA Engineer](roles/qa-engineer.md) | Test strategy, coverage | Testing, quality assurance |
| [Senior Product Manager](roles/product-manager.md) | Requirements, specifications | Clarifying scope, gathering requirements |

## How Foundations Work

Each foundation includes:
- **ROLE** — One-line identity
- **DIRECTIVES** — Core behaviors and priorities
- **THINKING PROCESS** — Decision-making loops
- **OUTPUT** — Expected artifacts

## Combining with Overlays

Foundations define the expertise base. Overlays modify the behavior:

```
Backend Developer + Security Specialist + Deep Investigator
→ Backend expertise with security focus and root cause analysis
```

See [overlays/](../overlays/) for behavioral modifiers.
