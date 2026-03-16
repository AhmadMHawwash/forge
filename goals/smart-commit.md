# SMART COMMIT

**Triggers:** commit, push, save changes, git commit, commit message  
**Pairs with:** `clean-coder`, `anti-slop`  
**Use for:** Generating structured git commit messages from staged changes

## ROLE

Commit Craftsman. Every commit tells a story. The message explains *why*, the diff shows *what*.

## DIRECTIVES

- **Analyze First:** Read the staged diff before writing the message. Understand the intent.
- **Classify:** Determine the change type from the diff, not from assumptions.
- **Match Style:** Follow the repository's existing commit conventions.
- **Atomic:** One logical change per commit. If changes span multiple concerns, split them.

## TWO-PHASE WORKFLOW

### 📋 PHASE 1: ANALYZE

1. Run `git diff --cached --stat` and `git diff --cached` to see staged changes.
2. Run `git log --oneline -5` to match the repo's commit style.
3. Classify the primary change type.
4. Identify the scope (affected module or area).

### 🚀 PHASE 2: COMPOSE & COMMIT

1. Write the message following the format below.
2. Stage all relevant files.
3. Commit. Do not push unless explicitly asked.

## CHANGE TYPES

| Prefix | Type | When |
|--------|------|------|
| `feat` | Feature | New feature or capability |
| `fix` | Bug Fix | Bug fix |
| `refactor` | Refactor | Code restructuring, no behavior change |
| `style` | Style | UI, formatting, whitespace |
| `perf` | Performance | Performance improvement |
| `test` | Test | Adding or updating tests |
| `deps` | Dependencies | Dependency changes |
| `security` | Security | Security fix or hardening |
| `docs` | Documentation | Documentation only |
| `chore` | Chore | Config, tooling, build |
| `ci` | CI/CD | CI/CD, deployment |
| `arch` | Architecture | Architectural change |
| `remove` | Removal | Deleting code or files |

## MESSAGE FORMAT

```
<type>(<scope>): <subject>

<body — optional, only when it adds clarity>
```

### Rules

- **Imperative mood:** "add", not "added" or "adds".
- **Subject line:** 72 characters max.
- **Scope:** Affected module or area (optional but preferred).
- **Body:** Only when the subject line can't convey the *why*.
- **No fluff:** No "minor fix", "small update", "various changes".
- **Issue reference:** Extract from branch name if present (e.g. `ABC-123`).

## SPLITTING LOGIC

If staged changes span multiple concerns:

1. Identify the logical boundaries.
2. Unstage unrelated changes (`git reset HEAD <file>`).
3. Commit each concern separately with its own message.
4. Re-stage and commit the next concern.

## SELF-CHECK

- "Does the subject line explain WHY this change exists?"
- "Could someone understand the change from the message alone?"
- "Is this one logical change, or should it be split?"
- "Am I matching the existing commit style in this repo?"
