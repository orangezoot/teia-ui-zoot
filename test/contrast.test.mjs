import { test } from 'node:test'
import assert from 'node:assert/strict'
import {
  CARD_CONTRAST,
  contrastRatio,
  readableText,
} from '../src/utils/contrast.mjs'

const hexSweep = function* () {
  for (let r = 0; r < 256; r += 17)
    for (let g = 0; g < 256; g += 17)
      for (let b = 0; b < 256; b += 17)
        yield `#${[r, g, b]
          .map((n) => n.toString(16).padStart(2, '0'))
          .join('')}`
}

test('contrastRatio matches WCAG reference values', () => {
  assert.equal(contrastRatio('#000000', '#ffffff'), 21)
  assert.equal(contrastRatio('#ffffff', '#ffffff'), 1)
  // #767676 is the classic lightest gray passing 4.5:1 on white.
  assert.ok(contrastRatio('#767676', '#ffffff') >= 4.5)
  assert.ok(contrastRatio('#777777', '#ffffff') < 4.5)
})

test('readableText lands on the same contrast for every background', () => {
  for (const bg of hexSweep()) {
    const ratio = contrastRatio(bg, readableText(bg))
    assert.ok(
      ratio >= CARD_CONTRAST && ratio < CARD_CONTRAST + 0.15,
      `${bg}: ${ratio}`
    )
  }
})

test('readableText goes dark on light backgrounds and light on dark', () => {
  assert.equal(readableText('#ffffff'), '#767676')
  assert.equal(readableText('#000000'), '#757575')
  assert.ok(contrastRatio(readableText('#ffff00'), '#000000') < 10) // dark
  assert.ok(contrastRatio(readableText('#0000ff'), '#ffffff') < 10) // light
})

test('readableText keeps the background hue', () => {
  const [r, g, b] = [1, 3, 5].map((i) =>
    parseInt(readableText('#ffd0d0').slice(i, i + 2), 16)
  )
  assert.ok(r > g && r > b, 'pink background gets reddish text')
})
