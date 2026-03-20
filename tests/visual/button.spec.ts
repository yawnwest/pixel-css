import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/')
})

test('playground header', async ({ page }) => {
  await expect(page.locator('header')).toHaveScreenshot()
})

test('dark mode', async ({ page }) => {
  await page.click('#theme-toggle')
  await expect(page).toHaveScreenshot()
})
