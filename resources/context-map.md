# CONTEXT MAP

**Category:** Architecture
**Use for:** Onboarding AI to your specific project context, domain language, and mental model.

## 🗺️ HIGH-LEVEL ARCHITECTURE
<!-- Describe the 10,000ft view. Monolith? Microservices? Event-driven? -->
- **Style:** [e.g. Modular Monolith]
- **Key Constraints:** [e.g. Must run on edge devices]

## 🗣️ UBIQUITOUS LANGUAGE (Domain Dictionary)
<!-- Define the specific terms used in this project to avoid ambiguity -->
- **User:** [e.g. A registered paying customer. Visitors are "guests".]
- **Order:** [e.g. An immutable record of a transaction.]
- **Workspace:** [e.g. A collection of projects owned by an Organization.]

## ⚡ CRITICAL PATHS
<!-- What are the flows that MUST NOT fail? -->
1.  **Sign-up Flow:** User -> Auth0 -> DB -> Welcome Email.
2.  **Payment:** Stripe Webhook -> Ledger -> Provisioning.

## 🏗️ CORE PATTERNS
<!-- What are the "Physics" of this codebase? -->
- **Data Access:** We use Repository pattern. No direct DB calls in Controllers.
- **State:** React Query for server state, Zustand for global UI state.
- **Error Handling:** Result types, never throw exceptions in domain logic.

## 🧠 MENTAL MODEL
<!-- How should the AI think about this system? -->
Think of this system as a **[Analogy, e.g. "Traffic Control System"]**.
Safety is paramount. Throughput is secondary to correctness.
Modules are strict boundaries.
