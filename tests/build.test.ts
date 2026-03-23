import { describe, it, expect } from 'vitest'
import { readFileSync } from 'fs'
import { resolve } from 'path'

const dist = readFileSync(resolve(__dirname, '../dist/style.css'), 'utf-8')

describe('dist/style.css', () => {
  it('contains color tokens', () => {
    expect(dist).toContain('--color-primary')
    expect(dist).toContain('--color-border')
    expect(dist).toContain('--color-ring')
  })

  it('contains font token', () => {
    expect(dist).toContain('--font-pixel')
  })

  it('contains base styles', () => {
    expect(dist).toContain('-webkit-font-smoothing')
    expect(dist).toContain('image-rendering')
  })

  it('contains reduced motion media query', () => {
    expect(dist).toContain('prefers-reduced-motion')
  })
})
