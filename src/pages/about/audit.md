@zoot
# Accessibility Audit: About Page

**Page Path**: `src/pages/about/index.jsx`

## 1. Markdown Content
**Status**: Warning.
- **Issue**: The page renders `AboutMD` (a markdown component). Markdown often produces generic HTML.
- **Action**: Verify the markdown renderer produces semantic HTML (`<h1>`, `<h2>`, `<ul>`, etc.) and not just styled divs.
- **WCAG**: 1.3.1 Info and Relationships (A).

## 2. Page Title
**Status**: Good.
- **Note**: The `<Page title="about">` prop sets the document title, which is good.
- **Action**: Ensure there is a visible `<h1>About Teia</h1>` inside the content as well.

## Prompt for AI
> "Check `src/lang/en/about.md` and `src/pages/about/index.jsx`.
> Ensure the markdown content starts with a level 1 heading `# About` so the page has a main heading."
