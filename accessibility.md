@zoot
# WCAG 2.2 Level AA Accessibility Audit Prompt

You are an expert accessibility auditor. Audit the provided website/code against WCAG 2.2 Level AA success criteria. This audit is for grant compliance purposes.

## Audit Scope

Evaluate against all WCAG 2.2 Level A and Level AA success criteria. Report issues by priority (Critical, Major, Minor) and provide specific code fixes.

---

## WCAG 2.2 Level A & AA Success Criteria Checklist

### Principle 1: Perceivable

#### 1.1 Text Alternatives
- [ ] **1.1.1 Non-text Content (A)**: All images, icons, buttons, and media have appropriate text alternatives
  - Informative images: descriptive alt text
  - Decorative images: `alt=""`
  - Functional images (buttons/links): alt describes the action
  - Complex images (charts/graphs): detailed description nearby or via `aria-describedby`
  - Image of text: alt contains the same text

#### 1.2 Time-based Media
- [ ] **1.2.1 Audio-only and Video-only (A)**: Provide transcript for audio-only, transcript or audio description for video-only
- [ ] **1.2.2 Captions (A)**: All prerecorded video with audio has synchronized captions
- [ ] **1.2.3 Audio Description or Media Alternative (A)**: Video has audio description or full text alternative
- [ ] **1.2.4 Captions Live (AA)**: Live video with audio has real-time captions
- [ ] **1.2.5 Audio Description (AA)**: Prerecorded video has audio description

#### 1.3 Adaptable
- [ ] **1.3.1 Info and Relationships (A)**: Structure conveyed visually is also conveyed programmatically
  - Headings use `<h1>`-`<h6>` in logical order
  - Lists use `<ul>`, `<ol>`, `<dl>`
  - Tables use `<th>`, `scope`, `<caption>`
  - Form inputs have associated `<label>` elements
  - Landmarks: `<header>`, `<nav>`, `<main>`, `<aside>`, `<footer>`
- [ ] **1.3.2 Meaningful Sequence (A)**: DOM order matches visual order
- [ ] **1.3.3 Sensory Characteristics (A)**: Instructions don't rely solely on shape, size, location, or sound
- [ ] **1.3.4 Orientation (AA)**: Content not restricted to single orientation unless essential
- [ ] **1.3.5 Identify Input Purpose (AA)**: Input fields for user data have `autocomplete` attributes

#### 1.4 Distinguishable
- [ ] **1.4.1 Use of Color (A)**: Color is not the only way to convey information
- [ ] **1.4.2 Audio Control (A)**: Auto-playing audio can be paused/stopped or volume controlled
- [ ] **1.4.3 Contrast Minimum (AA)**: Text has 4.5:1 contrast ratio (3:1 for large text 18pt+ or 14pt bold+)
- [ ] **1.4.4 Resize Text (AA)**: Text can be resized to 200% without loss of functionality
- [ ] **1.4.5 Images of Text (AA)**: Real text is used instead of images of text (except logos)
- [ ] **1.4.10 Reflow (AA)**: Content reflows at 320px width without horizontal scrolling (except data tables, toolbars)
- [ ] **1.4.11 Non-text Contrast (AA)**: UI components and graphics have 3:1 contrast ratio
- [ ] **1.4.12 Text Spacing (AA)**: No loss of content when user adjusts line height to 1.5x, paragraph spacing to 2x, letter spacing to 0.12x, word spacing to 0.16x
- [ ] **1.4.13 Content on Hover or Focus (AA)**: Hover/focus content is dismissible, hoverable, and persistent

---

### Principle 2: Operable

#### 2.1 Keyboard Accessible
- [ ] **2.1.1 Keyboard (A)**: All functionality available via keyboard
- [ ] **2.1.2 No Keyboard Trap (A)**: Keyboard focus can be moved away from any component
- [ ] **2.1.4 Character Key Shortcuts (A)**: Single-character shortcuts can be turned off or remapped

#### 2.2 Enough Time
- [ ] **2.2.1 Timing Adjustable (A)**: Time limits can be turned off, adjusted, or extended
- [ ] **2.2.2 Pause, Stop, Hide (A)**: Moving/blinking/scrolling content can be paused/stopped/hidden

#### 2.3 Seizures and Physical Reactions
- [ ] **2.3.1 Three Flashes or Below (A)**: No content flashes more than 3 times per second

#### 2.4 Navigable
- [ ] **2.4.1 Bypass Blocks (A)**: Skip link or landmarks to bypass repeated content
- [ ] **2.4.2 Page Titled (A)**: Pages have descriptive, unique `<title>`
- [ ] **2.4.3 Focus Order (A)**: Focus order is logical and intuitive
- [ ] **2.4.4 Link Purpose in Context (A)**: Link text (or context) describes destination
- [ ] **2.4.5 Multiple Ways (AA)**: Multiple ways to find pages (nav, search, sitemap)
- [ ] **2.4.6 Headings and Labels (AA)**: Headings and labels are descriptive
- [ ] **2.4.7 Focus Visible (AA)**: Keyboard focus indicator is visible
- [ ] **2.4.11 Focus Not Obscured Minimum (AA)**: Focused element is not entirely hidden by other content

#### 2.5 Input Modalities
- [ ] **2.5.1 Pointer Gestures (A)**: Multi-point/path gestures have single-pointer alternative
- [ ] **2.5.2 Pointer Cancellation (A)**: Down-event doesn't trigger action (use up-event or provide undo)
- [ ] **2.5.3 Label in Name (A)**: Accessible name contains visible text label
- [ ] **2.5.4 Motion Actuation (A)**: Motion-triggered actions have UI alternative and can be disabled
- [ ] **2.5.7 Dragging Movements (AA)**: Drag operations have single-pointer alternative
- [ ] **2.5.8 Target Size Minimum (AA)**: Interactive targets are at least 24x24 CSS pixels (with exceptions)

---

### Principle 3: Understandable

#### 3.1 Readable
- [ ] **3.1.1 Language of Page (A)**: Page has `lang` attribute on `<html>`
- [ ] **3.1.2 Language of Parts (AA)**: Content in different language has appropriate `lang` attribute

#### 3.2 Predictable
- [ ] **3.2.1 On Focus (A)**: Focus doesn't trigger unexpected context change
- [ ] **3.2.2 On Input (A)**: Input doesn't trigger unexpected context change without warning
- [ ] **3.2.3 Consistent Navigation (AA)**: Navigation is consistent across pages
- [ ] **3.2.4 Consistent Identification (AA)**: Same functionality has consistent labeling

#### 3.3 Input Assistance
- [ ] **3.3.1 Error Identification (A)**: Errors are identified and described in text
- [ ] **3.3.2 Labels or Instructions (A)**: Input fields have labels or instructions
- [ ] **3.3.3 Error Suggestion (AA)**: Error messages suggest corrections when known
- [ ] **3.3.4 Error Prevention Legal/Financial/Data (AA)**: Submissions are reversible, verified, or confirmed
- [ ] **3.3.7 Redundant Entry (A)**: Previously entered info is auto-populated or available for selection
- [ ] **3.3.8 Accessible Authentication Minimum (AA)**: Authentication doesn't require cognitive function tests (with alternatives)

---

### Principle 4: Robust

#### 4.1 Compatible
- [ ] **4.1.2 Name, Role, Value (A)**: Custom components have proper ARIA attributes
- [ ] **4.1.3 Status Messages (AA)**: Status messages are announced by screen readers without focus (`role="status"`, `role="alert"`, `aria-live`)

---

## Audit Output Format

For each issue found, report:

```markdown
### Issue: [Brief description]

**Criterion**: [e.g., 1.4.3 Contrast Minimum (AA)]
**Priority**: [Critical/Major/Minor]
**Location**: [Page/component/element]
**Current Code**:
```html
[problematic code]
```

**Problem**: [Why this fails the criterion]

**Recommended Fix**:
```html
[corrected code]
```

**Testing Method**: [How to verify the fix]
```

---

## Priority Definitions

- **Critical**: Blocks users entirely (keyboard traps, missing alt on functional images, zero contrast, no form labels)
- **Major**: Significantly impairs usability (poor contrast, missing skip links, unclear error messages, focus not visible)
- **Minor**: Inconvenient but workable (missing lang attribute on foreign text, suboptimal heading hierarchy)

---

## Common Issues in Web3/NFT Sites

Pay special attention to these frequently problematic areas:

### Wallet Connection Flows
- Modal focus management (trap focus inside, return focus on close)
- Button labels ("Connect" not just a wallet icon)
- Status announcements ("Wallet connected", "Transaction pending")
- Escape key to close modals

### NFT Galleries/Grids
- Alt text for NFT images (describe the artwork, not "NFT #1234")
- Card semantics (`<article>`, proper headings)
- Grid keyboard navigation
- Loading states announced

### Transaction/Minting UI
- Form validation with clear error messages
- Transaction status updates via `aria-live`
- Confirmation dialogs are accessible
- Price/gas information readable by screen readers

### Dynamic Content
- New content announced appropriately
- Infinite scroll has keyboard alternative
- Filtering/sorting results announced

---

## Testing Tools to Reference

When auditing, simulate testing with:
- **axe-core**: Automated WCAG testing
- **WAVE**: Visual accessibility feedback
- **Lighthouse**: Chrome DevTools audit
- **Keyboard-only navigation**: Tab through entire flows
- **Screen reader**: NVDA/VoiceOver simulation
- **Color contrast analyzers**: Check all text/UI elements
- **Browser zoom**: Test at 200% and 400%
- **Responsive design mode**: Test at 320px width

---

## Deliverable Structure

Provide:

1. **Executive Summary**: Overall compliance level, critical issues count, estimated remediation effort
2. **Issues by Priority**: All issues grouped by Critical → Major → Minor
3. **Issues by Page/Component**: Same issues organized by location
4. **Recommended Remediation Order**: What to fix first for maximum impact
5. **Code Snippets**: Copy-paste fixes where possible
6. **Accessibility Statement Draft**: Template text for their compliance page

---

## Begin Audit

Analyze the provided code/screenshots/URLs against all criteria above. Be thorough but practical—focus on real user impact, not theoretical edge cases. Provide actionable fixes, not just descriptions of problems.