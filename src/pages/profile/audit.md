@zoot
# Accessibility Audit: Profile Page

**Page Path**: `src/pages/profile/index.jsx`

## 1. Restricted/Review Status
**Status**: Critical.
- **Issue**: The "Restricted account" or "Under review" banners use standard `<div>`s.
- **Action**: Add `role="alert"` to these containers so screen readers announce them immediately.
- **WCAG**: 4.1.3 Status Messages (AA).

**Current Code**:
```jsx
<div className={styles.restricted}>
  <h1>...</h1>
```

**Fix**:
```jsx
<div className={styles.restricted} role="alert">
```

## 2. Tabs Navigation
**Status**: Warning.
- **Issue**: The `Tabs` component is used for changing views (Creations, Collection, etc.).
- **Action**: Ensure the `Tabs` component uses `role="tablist"`, `role="tab"`, and `aria-selected` correctly.
- **WCAG**: 4.1.2 Name, Role, Value (A).

## Prompt for AI
> "Refactor `src/pages/profile/index.jsx`:
> 1. Add `role='alert'` to the restricted/blocked account warning banner.
> 2. Verify the `<Tabs>` component passes accessibility props or refactor the usage to be semantic navigation links if they just change routes (which they seem to do)."
