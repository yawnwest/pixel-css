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

test('card', async ({ page }) => {
  await expect(page.locator('#card-demo')).toHaveScreenshot()
})

test('stack', async ({ page }) => {
  await expect(page.locator('#stack-demo')).toHaveScreenshot()
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
