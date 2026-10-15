const channels = (hex) =>
  [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16))
const toHex = (rgb) =>
  `#${rgb.map((c) => Math.round(c).toString(16).padStart(2, '0')).join('')}`

// WCAG 2.x relative luminance of a #rrggbb color.
function luminance(hex) {
  const [r, g, b] = channels(hex).map((v) => {
    const c = v / 255
    return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4
  })
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

export function contrastRatio(a, b) {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x)
  return (hi + 0.05) / (lo + 0.05)
}

// Card text sits at this contrast on every background, not just above it.
// 4.5:1 is WCAG AA, and close to the ceiling: a fixed ratio K is reachable
// from every background only when K <= sqrt(21) ≈ 4.58.
export const CARD_CONTRAST = 4.5

// `bg` mixed toward black (light backgrounds) or white (dark ones) just far
// enough to reach CARD_CONTRAST, so the text keeps the background's hue.
export function readableText(bg) {
  const rgb = channels(bg)
  const target =
    contrastRatio(bg, '#000000') >= contrastRatio(bg, '#ffffff') ? 0 : 255
  const mix = (t) => toHex(rgb.map((c) => c + (target - c) * t))
  // Contrast grows with t; find the smallest t that reaches the ratio.
  let lo = 0
  let hi = 1
  for (let i = 0; i < 30; i++) {
    const t = (lo + hi) / 2
    contrastRatio(bg, mix(t)) >= CARD_CONTRAST ? (hi = t) : (lo = t)
  }
  return mix(hi)
}
