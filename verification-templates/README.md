# Verification Templates

Templates for validating that work meets quality standards and requirements. Use these checklists to verify completion of goals.

## Available Templates

| Template | Use With | Purpose |
|----------|----------|---------|
| [feature-verification.md](./feature-verification.md) | `goals/feature-request.md` | Validate feature implementation |
| [bug-verification.md](./bug-verification.md) | `goals/bug-investigation.md` | Validate bug fixes |
| [review-verification.md](./review-verification.md) | `goals/code-review.md` | Validate code review completion |
| [specification-verification.md](./specification-verification.md) | `goals/specification.md` | Validate spec completeness |

## How to Use

1. **After completing work**, open the relevant template
2. **Go through each checkpoint** and verify it's satisfied
3. **Document evidence** for claims (test output, screenshots, logs)
4. **Address any gaps** before considering work complete

## Philosophy

Verification is about **proving** the work is done, not just claiming it's done:

- **Evidence over assertion**: "Tests pass" with output, not just "I tested it"
- **Realistic scenarios**: Test with production-like data and conditions
- **Edge cases**: Consider what could go wrong, not just happy paths
- **Regression**: Verify existing functionality still works
