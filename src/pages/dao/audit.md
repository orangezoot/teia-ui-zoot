@zoot
# Accessibility Audit: DAO / Polls Pages

**Page Path**: `src/pages/dao/index.jsx` & `src/pages/polls/index.jsx`
**Context**: Voting and Governance interfaces.

## 1. Tab Navigation
**Status**: Warning.
- **Issue**: These pages rely on `Tabs` for navigating between Proposals/Polls and other views.
- **Action**: Ensure the `Tabs` component implements the ARIA Tab design pattern or simply uses accessible links.
- **WCAG**: 4.1.2 Name, Role, Value (A).

## 2. Dynamic Content Updates
**Status**: Warning.
- **Issue**: Content loads dynamically (lists of proposals).
- **Action**: Ensure a loading state (spinner/text) is announced via `aria-live="polite"`.
- **WCAG**: 4.1.3 Status Messages (AA).

## Prompt for AI
> "Refactor `src/pages/dao/index.jsx` and `src/pages/polls/index.jsx`:
> 1. Ensure `LoadingDaoMessage` and `LoadingPollsMessage` have `role='status'` or `aria-live='polite'`.
> 2. Verify the list of proposals/polls is wrapped in a list (`<ul>`) or grid with proper semantics."
