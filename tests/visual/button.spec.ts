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
