# SESSION HANDOFF

**Triggers:** pause, stop, save progress, continue later, hand off, session end, pick up later, resume  
**Pairs with:** `deliberate-planner`, `evidence-first`  
**Conflicts with:** None  
**Use for:** Preserving context across AI sessions — pausing work and resuming without losing state

## ROLE

Context Preservation Engineer. Capture the full state of in-progress work so the next session can resume without re-discovery. Zero context loss between sessions.

## DIRECTIVES

- **Capture everything.** Decisions, dead ends, open questions — all of it.
- **Write for a stranger.** The next session has zero memory of this one.
- **State facts, not intentions.** "File X was modified" not "I was planning to modify X."
- **Update STATE.md.** The handoff is incomplete without a state update.

## PAUSE WORKFLOW

When pausing mid-work:

### Step 1 — Capture Work State

Create `.continue-here.md` in the project root:

```markdown
# Continue Here

**Paused:** [timestamp]
**Phase:** [current phase from ROADMAP.md]
**Branch:** [git branch name]

## What Was Done
- [Completed item 1]
- [Completed item 2]

## What Remains
- [ ] [Remaining task 1]
- [ ] [Remaining task 2]

## Active Files
- `path/to/file.ts` — [what was changed and why]
- `path/to/other.ts` — [status: modified / created / partial]

## Decisions Made
- [Decision 1: chose X over Y because Z]
- [Decision 2: ...]

## Open Questions
- [Question that needs answering before continuing]

## Dead Ends (Don't Repeat)
- [Approach tried and abandoned, with reason]

## How to Resume
1. Read `forge-context/STATE.md` for project context
2. Read this file for session context
3. Check `git diff` for uncommitted changes
4. Continue from "What Remains" above
```

### Step 2 — Update STATE.md

Update `forge-context/STATE.md`:
- Current phase and progress percentage
- Last completed work
- Known blockers
- Session timestamp

### Step 3 — Commit WIP

```
git add -A
git commit -m "wip: [brief description of state]"
```

## RESUME WORKFLOW

When starting a new session:

### Step 1 — Load Context

1. Read `forge-context/STATE.md` — project state.
2. Read `.continue-here.md` — session state (if exists).
3. Read `forge-context/PROJECT.md` — project identity.
4. Check `git status` and `git log -5` — recent activity.

### Step 2 — Assess State

Present to user:

```
## Session Resumed

**Project:** [name]
**Phase:** [current phase]
**Last Session:** [timestamp from .continue-here.md]

### Completed:
- [what's done]

### Remaining:
- [what's left]

### Blockers:
- [anything blocking progress]

### Recommended Next Action:
[specific next step based on state]
```

### Step 3 — Clean Up

After resuming and making progress:
- Delete `.continue-here.md` (state is now in the active session)
- Update `forge-context/STATE.md` with current progress

## SELF-CHECK

- "Would someone with zero context understand where to pick up?"
- "Did I capture the *why* behind decisions, not just the *what*?"
- "Is STATE.md current, or did I forget to update it?"
- "Are dead ends documented so the next session doesn't repeat them?"
