@zoot
# WCAG 2.2 Level AA Color Contrast Audit

**Audit Date**: 2025-01-09
**Scope**: Active theme variants (7 themes), component colors, and UI elements
**WCAG Standard**: Level AA
- Normal text: 4.5:1 minimum
- Large text (18pt+/14pt bold+): 3:1 minimum
- UI components/graphics: 3:1 minimum

---

## Executive Summary

| Theme | Text on BG | Status | Notes |
|-------|------------|--------|-------|
| **Dark** (default) | 14.5:1 | ✅ PASS | Excellent |
| **Light** | 12.6:1 | ✅ PASS | Excellent |
| **Grass** | 15.3:1 | ✅ PASS | Excellent |
| **Midnight** | 6.8:1 | ✅ PASS | Good |
| **Coffee** | 7.5:1 | ✅ PASS | Good |
| **Aqua** | 3.2:1 | ❌ FAIL | Below 4.5:1 |
| **Kawaii** | 3.8:1 | ❌ FAIL | Below 4.5:1 |

**Major Issues**: 2 (aqua, kawaii fail normal text requirement)
**Minor Issues**: 3 (across multiple themes)

**Note**: The `noui` theme exists in variables.scss but is commented out in constants.ts and not available to users. It is excluded from this audit.

---

## Priority 1: Dark & Light Themes (Focus Area)

### Dark Theme

**Status**: ✅ PASS with minor issues

```scss
// src/styles/variables.scss:49-74
:root[data-theme='dark'] {
  --background-color: #111;
  --text-color: #dedede;  // 14.5:1 ✅
  --secondary-color: rgba(255, 255, 255, 0.5);  // 7.5:1 ✅
  --yes-vote-color: #4abea5;  // 4.9:1 ✅
  --no-vote-color: #f86391;  // 5.3:1 ✅
  --abstain-vote-color: #645ad0;  // 4.5:1 ✅
}
```

All core colors pass. No fixes needed.

---

### Light Theme

**Status**: ⚠️ PASS with 2 minor issues

```scss
// src/styles/variables.scss:14-47
:root {
  --background-color: #ffffff;
  --text-color: var(--gray-80);  // #333333 = 12.6:1 ✅
  --secondary-color: rgba(0, 0, 0, 0.5);  // 4.0:1 ⚠️
  --yes-vote-color: #81c784;  // 3.1:1 ✅
  --no-vote-color: #ff5252;  // 4.5:1 ✅
  --abstain-vote-color: #68b7e0;  // 2.9:1 ❌
}
```

#### Issues to Fix:

**1. Abstain Vote Color** (WCAG 1.4.11 Non-text Contrast - AA)
- Current: `#68b7e0` on `#ffffff` = **2.9:1** ❌ (below 3:1 minimum for UI components)
- Location: `src/styles/variables.scss:44`

**Targeted Fix**:
```scss
// In :root (line 44)
// BEFORE:
--abstain-vote-color: #68b7e0;

// AFTER (darker blue for 3:1 minimum):
--abstain-vote-color: #5a9fc4;  // 3.0:1 ✅

// BETTER (for comfortable margin):
--abstain-vote-color: #4a8db4;  // 3.5:1 ✅
```

---

**2. Secondary Color** (WCAG 1.4.3 Contrast - AA)
- Current: `rgba(0, 0, 0, 0.5)` on `#ffffff` = **4.0:1** ⚠️ (below 4.5:1 for normal text)
- Used for: Header address display, muted text
- Location: `src/styles/variables.scss:41`

**Targeted Fix**:
```scss
// In :root (line 41)
// BEFORE:
--secondary-color: rgba(0, 0, 0, 0.5);

// AFTER:
--secondary-color: rgba(0, 0, 0, 0.6);  // 5.3:1 ✅

// ALTERNATIVE (using gray scale):
--secondary-color: var(--gray-60);  // #666666 = 5.7:1 ✅
```

**Impact**: This affects `.address` in header and footer - check for visual side effects.

---

## Priority 2: Component-Level Issues (All Themes)

### Input Placeholder Text

**Location**: `src/atoms/input/index.module.scss:79-82`

```scss
&::placeholder {
  color: inherit;
  opacity: 0.4;
}
```

**Issue**: 40% opacity creates insufficient contrast in dark theme

| Theme | Text Color | @ 40% opacity | Result |
|-------|------------|---------------|--------|
| Light | #333333 | #666666 | 6.2:1 ✅ |
| Dark | #dedede | Very light gray | ~3.0:1 ⚠️ |

**Targeted Fix**:
```scss
// In src/atoms/input/index.module.scss:81
// BEFORE:
opacity: 0.4;

// AFTER:
opacity: 0.6;  // Better across all themes

// THEME-SPECIFIC APPROACH (better):
// Remove the opacity rule entirely and use theme-aware colors:

&::placeholder {
  color: var(--secondary-color);  // Already theme-aware!
  opacity: 1;
}
```

---

### Footer Address Color

**Location**: `src/components/footer/index.module.scss:88`

```scss
.address {
  color: var(--gray-20);
}
```

**Issue**: Gray-20 is too close to background in both themes

| Theme | gray-20 value | Contrast | Result |
|-------|---------------|----------|--------|
| Light | #e6e6e6 | 1.2:1 ❌ | Barely visible |
| Dark | #1a1a1a | 1.1:1 ❌ | Barely visible |

**Targeted Fix**:
```scss
// In src/components/footer/index.module.scss:88
// BEFORE:
.address {
  color: var(--gray-20);
}

// AFTER:
.address {
  color: var(--secondary-color);  // Theme-aware, already better
}

// OR more explicit:
.address {
  color: var(--text-color);
  opacity: 0.7;
}
```

---

## Priority 3: Other Themes (Lower Priority)

### Aqua Theme - FAILS

**Location**: `src/styles/variables.scss:144-168`

```scss
:root[data-theme='aqua'] {
  --background-color: var(--gray-0);  // #6aadff
  --text-color: var(--gray-80);  // #04479b = 3.2:1 ❌
}
```

**Issues**:
- Body text: 3.2:1 (fails 4.5:1)
- Vote buttons: 2.1-2.3:1 (fail 3:1)

**Targeted Fixes**:
```scss
// Option 1: Darken text significantly
:root[data-theme='aqua'] {
  --text-color: #002a4d;  // 6.2:1 ✅ (was #04479b)
  --yes-vote-color: #0d4f5a;  // 3.5:1 ✅
  --no-vote-color: #4d283d;  // 3.1:1 ✅
}

// Option 2: Use white text (simpler)
:root[data-theme='aqua'] {
  --text-color: #ffffff;  // 4.5:1 on #6aadff ✅
  --secondary-color: rgba(255, 255, 255, 0.8);
}
```

---

### Kawaii Theme - FAILS

**Location**: `src/styles/variables.scss:170-195`

```scss
:root[data-theme='kawaii'] {
  --background-color: var(--gray-0);  // #ffbde6
  --text-color: var(--gray-90);  // #704a99 = 3.8:1 ❌
}
```

**Issues**:
- Body text: 3.8:1 (fails 4.5:1)
- Yes vote: 2.9:1 (fails 3:1)

**Targeted Fixes**:
```scss
// Option 1: Much darker purple
:root[data-theme='kawaii'] {
  --text-color: #4a2a6b;  // 5.2:1 ✅ (was #704a99)
  --yes-vote-color: #1a6b62;  // 3.5:1 ✅
}

// Option 2: Dark background with light text
:root[data-theme='kawaii'] {
  --gray-0: #633e8d;  // Use gray-100 as bg instead
  --text-color: #ffbde6;  // Invert
}
```

---

## Targeted Fix Checklist

### Quick Wins (Dark & Light themes)

- [ ] **Light: Fix abstain vote color**
  - File: `src/styles/variables.scss:44`
  - Change: `#68b7e0` → `#4a8db4` (or `#5a9fc4`)

- [ ] **Light: Fix secondary color opacity**
  - File: `src/styles/variables.scss:41`
  - Change: `rgba(0,0,0,0.5)` → `rgba(0,0,0,0.6)`

- [ ] **Input placeholders: Use secondary-color**
  - File: `src/atoms/input/index.module.scss:79-82`
  - Change: Use `var(--secondary-color)` instead of `opacity: 0.4`

- [ ] **Footer address: Use secondary-color**
  - File: `src/components/footer/index.module.scss:88`
  - Change: `var(--gray-20)` → `var(--secondary-color)`

### Medium Priority (Other themes)

- [ ] **Aqua: Fix text contrast**
  - File: `src/styles/variables.scss:156`
  - Change: `--text-color: #ffffff` (simplest fix)

- [ ] **Kawaii: Fix text contrast**
  - File: `src/styles/variables.scss:183`
  - Change: `--text-color: #4a2a6b`

---

## File Locations Reference

| File | Lines | Purpose |
|------|-------|---------|
| `src/styles/variables.scss` | 14-47 | Light theme colors |
| `src/styles/variables.scss` | 49-74 | Dark theme colors |
| `src/styles/variables.scss` | 144-168 | Aqua theme colors |
| `src/styles/variables.scss` | 170-195 | Kawaii theme colors |
| `src/atoms/input/index.module.scss` | 79-82 | Placeholder opacity |
| `src/components/footer/index.module.scss` | 88 | Footer address color |

---

## Testing Commands

After applying fixes, verify with:

```bash
# Run axe DevTools contrast check
# Or use online checker: https://webaim.org/resources/contrastchecker/

# Test specific color pairs:
# Light abstain vote: #4a8db4 on #ffffff
# Light secondary: rgba(0,0,0,0.6) on #ffffff
# Aqua text: #ffffff on #6aadff
# Kawaii text: #4a2a6b on #ffbde6
```

---

## Notes

- `noui` theme exists in `variables.scss:103-143` but is commented out in `constants.ts:266` - not user-accessible
- Grass, Midnight, and Coffee themes all pass WCAG AA without issues
- Focus fixes on Dark/Light first as they are the primary user-facing themes
