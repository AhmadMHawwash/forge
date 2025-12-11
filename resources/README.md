# RESOURCES

Domain, stack, and repository-specific knowledge to add relevant context to profiles.

## Available Resources

### Stacks
| Resource | Coverage |
|----------|----------|
| [react-node](stacks/react-node.md) | React frontend + Node.js backend patterns |
| [python-django](stacks/python-django.md) | Python + Django patterns |

### Domains
| Resource | Coverage |
|----------|----------|
| [e-commerce](domains/e-commerce.md) | E-commerce patterns, checkout, inventory |

### Learnings
Repository-specific knowledge extracted using the `repository-learning` goal. Each file contains evidence-backed patterns and conventions.

| Resource | Coverage |
|----------|----------|
| *(Add entries as repositories are analyzed)* | |

### Boundaries
Service interfaces and integration points documented from analyzed repositories.

| Resource | Coverage |
|----------|----------|
| *(Add entries as repositories are analyzed)* | |

## Adding Resources

Resources are optional context enhancers. Add when working in a specific domain or stack:

```
Backend Developer + Security Specialist + E-commerce Domain
→ AI knows e-commerce security patterns (PCI, payment flows, etc.)
```

**To create new resources automatically:**
Use the `repository-learning` goal to analyze a codebase. It will generate evidence-backed learnings, domain knowledge, and boundary documentation.

## Structure

Each resource includes:
- Domain/stack-specific patterns
- Common pitfalls
- Best practices
- Key terminology
- **Evidence citations** (for learnings and boundaries)

