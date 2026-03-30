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
    expect(theme).toContain('--color-neutral')
    expect(theme).toContain('--color-success')
    expect(theme).toContain('--color-warning')
    expect(theme).toContain('--color-destructive')
    expect(theme).toContain('--color-ring')
    expect(theme).toContain('--color-border')
  })

  it('defines font tokens', () => {
    expect(theme).toContain('--font-pixel')
    expect(theme).toContain('--font-code')
  })

  it('defines spacing and corner tokens', () => {
    expect(theme).toContain('--spacing')
    expect(theme).toContain('--pixel-corner')
    expect(theme).toContain('--pixel-clip')
  })

  it('defines state tokens', () => {
    expect(theme).toContain('--opacity-disabled')
  })

  it('defines animation tokens', () => {
    expect(theme).toContain('--duration-base')
    expect(theme).toContain('--duration-slow')
    expect(theme).toContain('--ease-pixel')
  })

  it('defines text size tokens', () => {
    expect(theme).toContain('--text-xs')
    expect(theme).toContain('--text-sm')
    expect(theme).toContain('--text-base')
    expect(theme).toContain('--text-lg')
    expect(theme).toContain('--text-xl')
    expect(theme).toContain('--text-2xl')
    expect(theme).toContain('--text-3xl')
    expect(theme).toContain('--text-4xl')
  })

  it('defines leading tokens', () => {
    expect(theme).toContain('--leading-tight')
    expect(theme).toContain('--leading-normal')
    expect(theme).toContain('--leading-loose')
  })

  it('imports reset, theme and base', () => {
    expect(css).toContain('./reset.css')
    expect(css).toContain('./theme.css')
    expect(css).toContain('./base.css')
  })

  it('imports components', () => {
    expect(css).toContain('./components/button.css')
    expect(css).toContain('./components/card.css')
    expect(css).toContain('./components/stack.css')
    expect(css).toContain('./components/panel.css')
    expect(css).toContain('./components/text.css')
    expect(css).toContain('./components/form.css')
  })
})
