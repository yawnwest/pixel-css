import { describe, it, expect } from 'vitest'
import { readFileSync } from 'fs'
import { resolve } from 'path'

const css = readFileSync(resolve(__dirname, '../src/index.css'), 'utf-8')
const theme = readFileSync(resolve(__dirname, '../src/theme.css'), 'utf-8')

describe('tokens source', () => {
  it('defines color tokens', () => {
    expect(theme).toContain('--color-background')
    expect(theme).toContain('--color-surface')
    expect(theme).toContain('--color-foreground')
    expect(theme).toContain('--color-primary')
    expect(theme).toContain('--color-ring')
    expect(theme).toContain('--color-border')
  })

  it('defines font token', () => {
    expect(theme).toContain('--font-pixel')
  })

  it('defines text size tokens', () => {
    expect(theme).toContain('--text-xs')
    expect(theme).toContain('--text-base')
    expect(theme).toContain('--text-4xl')
  })

  it('defines leading tokens', () => {
    expect(theme).toContain('--leading-tight')
    expect(theme).toContain('--leading-normal')
    expect(theme).toContain('--leading-loose')
  })

  it('imports theme and base', () => {
    expect(css).toContain('./theme.css')
    expect(css).toContain('./base.css')
  })

  it('imports components', () => {
    expect(css).toContain('./components/card.css')
    expect(css).toContain('./components/stack.css')
  })
})
