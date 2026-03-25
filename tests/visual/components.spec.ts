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

test('progress default', async ({ page }) => {
  await page.addStyleTag({
    content: '*, *::before, *::after { animation-play-state: paused !important; }',
  })
  await expect(page.locator('#progress-demo')).toHaveScreenshot()
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

test('checkbox default', async ({ page }) => {
  await expect(page.locator('#checkbox-demo')).toHaveScreenshot()
})

test('checkbox hover', async ({ page }) => {
  await page.locator('#checkbox-demo .checkbox').nth(1).hover()
  await expect(page.locator('#checkbox-demo')).toHaveScreenshot()
})

test('checkbox focus', async ({ page }) => {
  await page.locator('#checkbox-demo input[type="checkbox"]').nth(1).focus()
  await expect(page.locator('#checkbox-demo')).toHaveScreenshot()
})

test('checkbox disabled', async ({ page }) => {
  await page.locator('#checkbox-demo .checkbox').nth(2).hover()
  await expect(page.locator('#checkbox-demo')).toHaveScreenshot()
})

test('input default', async ({ page }) => {
  await expect(page.locator('#input-demo')).toHaveScreenshot()
})

test('input focus', async ({ page }) => {
  await page.locator('#input-demo .input').first().focus()
  await expect(page.locator('#input-demo')).toHaveScreenshot()
})

test('input disabled', async ({ page }) => {
  await page.locator('#input-demo .input[disabled]').hover()
  await expect(page.locator('#input-demo')).toHaveScreenshot()
})

test('textarea default', async ({ page }) => {
  await expect(page.locator('#textarea-demo')).toHaveScreenshot()
})

test('textarea focus', async ({ page }) => {
  await page.locator('#textarea-demo .input').first().focus()
  await expect(page.locator('#textarea-demo')).toHaveScreenshot()
})

test('textarea disabled', async ({ page }) => {
  await page.locator('#textarea-demo .input[disabled]').hover()
  await expect(page.locator('#textarea-demo')).toHaveScreenshot()
})

test('select default', async ({ page }) => {
  await expect(page.locator('#select-demo')).toHaveScreenshot()
})

test('select focus', async ({ page }) => {
  await page.locator('#select-demo select.input').first().focus()
  await expect(page.locator('#select-demo')).toHaveScreenshot()
})

test('select disabled', async ({ page }) => {
  await page.locator('#select-demo .select:has(select:disabled)').hover()
  await expect(page.locator('#select-demo')).toHaveScreenshot()
})
