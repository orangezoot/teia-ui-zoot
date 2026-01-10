@zoot
# Accessibility Audit: Code of Conduct Page

**Page Path**: `src/pages/codeofconduct/index.jsx`

## 1. Markdown Structure
**Status**: Warning.
- **Issue**: Renders markdown directly.
- **Action**: Ensure `src/lang/en/codeofconduct.md` starts with `# Code of Conduct` to provide an `<h1>` heading.
- **WCAG**: 1.3.1 Info and Relationships (A).

## Prompt for AI
> "Update `src/lang/en/codeofconduct.md` to ensure the first line is `# Code of Conduct`."
