# SPECIFICATION DEVELOPMENT

Create comprehensive specifications that guide implementation. Transform vague requirements into clear, actionable documentation using a structured workflow.

## TWO-PHASE WORKFLOW

### 📋 PHASE 1: DISCOVERY

**Purpose:** Understand the problem space, gather requirements, and explore constraints before writing specs.

#### 1. DISCOVER

**Gather context and requirements:**
- What problem are we solving? For whom?
- What does success look like?
- What are the constraints (technical, business, time)?
- What exists today? What needs to change?

**Key questions to answer:**
- Who are the users and what are their goals?
- What are the functional requirements (what it does)?
- What are the non-functional requirements (how well it does it)?
- What are the integration points with other systems?
- What are the acceptance criteria?

**Scale-Adaptive Depth:**
- **Simple specs:** Quick understanding, 3-5 key requirements, single user story
- **Medium specs:** Full requirements gathering, multiple user stories, basic architecture
- **Complex specs:** Stakeholder interviews, competitive analysis, detailed architecture, phased delivery

#### 2. EXPLORE

**Identify options and trade-offs:**
- What approaches could solve this problem?
- What are the trade-offs of each approach?
- What are the risks and mitigation strategies?
- What assumptions are we making?

**Research as needed:**
- Existing patterns in the codebase
- Industry best practices
- Similar implementations for reference
- Technical constraints and capabilities

### 🚀 PHASE 2: SPECIFICATION

**Purpose:** Document the solution in a format that guides implementation and verification.

#### 3. SPECIFY

**Create the specification document including:**

**Overview:**
- Problem statement and context
- Goals and non-goals (what we're NOT building)
- Success criteria and metrics

**Requirements:**
- User stories with acceptance criteria
- Functional requirements
- Non-functional requirements (performance, security, etc.)

**Design:**
- High-level architecture or approach
- Key technical decisions and rationale
- Data models or API contracts (if applicable)
- Integration points

**Implementation Guidance:**
- Suggested approach / implementation order
- Known challenges and recommendations
- Testing strategy

**Out of Scope:**
- Explicitly list what is NOT included
- Future considerations (nice-to-haves for later)

#### 4. VALIDATE

**Ensure specification is complete:**
- Are all requirements clear and testable?
- Are there contradictions or ambiguities?
- Can a developer implement from this spec?
- Are acceptance criteria measurable?

**Gap detection checklist:**
- [ ] All user stories have acceptance criteria
- [ ] Edge cases are documented
- [ ] Error scenarios are defined
- [ ] Security considerations addressed
- [ ] Performance expectations specified
- [ ] Integration contracts defined

**Refinement loop:**
- Identify gaps and ambiguities
- Ask clarifying questions
- Update specification
- Re-validate until complete

## SPECIFICATION TEMPLATES

### Minimal Spec (Simple Features)
```markdown
## Feature: [Name]

**Problem:** [What problem are we solving?]

**Solution:** [High-level approach]

**User Story:** As a [user], I want [goal] so that [benefit].

**Acceptance Criteria:**
- [ ] [Testable criterion 1]
- [ ] [Testable criterion 2]
- [ ] [Testable criterion 3]

**Out of Scope:** [What we're NOT building]
```

### Standard Spec (Medium Features)
```markdown
## Feature: [Name]

### Overview
**Problem:** [Detailed problem statement]
**Goal:** [What success looks like]
**Non-goals:** [What we're explicitly NOT doing]

### Requirements

#### User Stories
1. As a [user], I want [goal] so that [benefit].
   - Acceptance: [criteria]

#### Functional Requirements
- FR1: [Requirement]
- FR2: [Requirement]

#### Non-Functional Requirements
- NFR1: [Performance/Security/etc.]

### Design

**Approach:** [High-level technical approach]

**Key Decisions:**
- Decision 1: [Choice] because [rationale]

**Data Model / API:** [If applicable]

### Implementation

**Suggested Order:**
1. [First component]
2. [Second component]

**Testing Strategy:**
- Unit tests: [What to test]
- Integration tests: [What to test]

### Open Questions
- [ ] [Question that needs answering]
```

### Comprehensive Spec (Complex Features)
```markdown
## Feature: [Name]
**Status:** Draft | In Review | Approved
**Author:** [Name]
**Last Updated:** [Date]

### 1. Executive Summary
[2-3 sentences on what and why]

### 2. Problem Statement
**Context:** [Background]
**Problem:** [Specific issue]
**Impact:** [Why it matters]

### 3. Goals & Success Metrics
| Goal | Metric | Target |
|------|--------|--------|
| [Goal] | [How measured] | [Value] |

**Non-goals:** [Explicitly excluded]

### 4. Requirements

#### 4.1 User Stories
[Detailed user stories with acceptance criteria]

#### 4.2 Functional Requirements
[Detailed functional requirements]

#### 4.3 Non-Functional Requirements
[Performance, security, scalability, etc.]

### 5. Design

#### 5.1 Architecture
[Diagrams, component descriptions]

#### 5.2 API Contracts
[Endpoints, request/response formats]

#### 5.3 Data Model
[Schema changes, data flows]

#### 5.4 Key Decisions
| Decision | Options | Choice | Rationale |
|----------|---------|--------|-----------|
| [Topic] | A, B, C | B | [Why] |

### 6. Implementation Plan

#### 6.1 Phases
[If phased delivery]

#### 6.2 Dependencies
[External dependencies, blockers]

#### 6.3 Risks & Mitigations
| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| [Risk] | High/Med/Low | High/Med/Low | [Action] |

### 7. Testing Strategy
[Test levels, coverage expectations]

### 8. Rollout Plan
[Deployment strategy, feature flags, rollback]

### 9. Appendix
[References, research, related docs]
```

## QUALITY GATES

**Specification is ready when:**
- ✅ Problem is clearly stated
- ✅ Requirements are testable
- ✅ No contradictions or ambiguities
- ✅ Scope is well-defined (including non-goals)
- ✅ Edge cases documented
- ✅ A developer can implement without guessing

## COMMUNICATION

**During Discovery:**
- Ask clarifying questions upfront
- Validate understanding before specifying
- Surface constraints and trade-offs early

**During Specification:**
- Share drafts for feedback
- Highlight open questions
- Document decisions and rationale

**When gaps are found:**
- Be specific about what's unclear
- Propose options when possible
- Update spec based on answers
