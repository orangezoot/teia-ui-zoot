@zoot
# Accessibility Audit: Core Values Page

**Page Path**: `src/pages/corevalues/index.jsx`

## 1. Markdown Structure
**Status**: Warning.
- **Issue**: Renders markdown directly.
- **Action**: Ensure `src/lang/en/corevalues.md` starts with `# Core Values`.
- **WCAG**: 1.3.1 Info and Relationships (A).

## Prompt for AI
> "Update `src/lang/en/corevalues.md` to ensure the first line is `# Core Values`."
