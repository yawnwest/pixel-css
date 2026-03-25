import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/')
})

test('typography', async ({ page }) => {
  await expect(page.locator('body')).toHaveScreenshot()
})

test('link focus', async ({ page }) => {
  await page.locator('a').first().focus()
  await expect(page.locator('a').first()).toHaveScreenshot()
})

test('text colors', async ({ page }) => {
  await expect(page.locator('#text-demo')).toHaveScreenshot()
})

test('buttons', async ({ page }) => {
  await expect(page.locator('#button-demo')).toHaveScreenshot()
})

test('button focus', async ({ page }) => {
  await page.locator('#button-demo .btn').first().focus()
  await expect(page.locator('#button-demo')).toHaveScreenshot()
})

test('button hover', async ({ page }) => {
  await page.locator('#button-demo .btn').first().hover()
  await expect(page.locator('#button-demo')).toHaveScreenshot()
})

test('card', async ({ page }) => {
  await expect(page.locator('#card-demo')).toHaveScreenshot()
})

test('stack', async ({ page }) => {
  await expect(page.locator('#stack-demo')).toHaveScreenshot()
})

test('panel', async ({ page }) => {
  const panel = page
    .locator('.panel')
    .filter({ has: page.locator('.panel-header', { hasText: 'Settings' }) })
  await expect(panel).toHaveScreenshot()
})

test('panel centered', async ({ page }) => {
  const panel = page
    .locator('.panel')
    .filter({ has: page.locator('.panel-header', { hasText: 'Centered' }) })
  await expect(panel).toHaveScreenshot()
})

test('panel footer open', async ({ page }) => {
  const panel = page
    .locator('.panel')
    .filter({ has: page.locator('.panel-header', { hasText: 'Centered' }) })
  await panel.locator('summary').click()
  await expect(panel).toHaveScreenshot()
})

test('dark mode', async ({ page }) => {
  await page.locator('#theme-toggle').click()
  await expect(page.locator('body')).toHaveScreenshot()
})

test('copy button', async ({ page }) => {
  await page.evaluate(() => {
    Object.defineProperty(navigator, 'clipboard', {
      value: { writeText: () => Promise.resolve() },
      configurable: true,
    })
  })
  await page.locator('.panel-footer summary').first().click()
  const copyBtn = page.locator('[data-copy-btn]').first()
  await copyBtn.click()
  await expect(copyBtn).toHaveScreenshot()
})

test('radio default', async ({ page }) => {
  await expect(page.locator('#radio-demo')).toHaveScreenshot()
})

test('radio hover', async ({ page }) => {
  await page.addStyleTag({
    content: '*, *::before, *::after { animation-play-state: paused !important; }',
  })
  await page.locator('#radio-demo .radio').nth(1).hover()
  await expect(page.locator('#radio-demo')).toHaveScreenshot()
})

test('radio focus', async ({ page }) => {
  await page.addStyleTag({
    content: '*, *::before, *::after { animation-play-state: paused !important; }',
  })
  await page.locator('#radio-demo input[type="radio"]').nth(1).focus()
  await expect(page.locator('#radio-demo')).toHaveScreenshot()
})

test('radio disabled', async ({ page }) => {
  await page.locator('#radio-demo .radio').nth(2).hover()
  await expect(page.locator('#radio-demo')).toHaveScreenshot()
})
