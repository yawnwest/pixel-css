import { defineConfig, devices } from '@playwright/test'

const PORT = process.env.PORT ?? '5173'
const BASE_URL = `http://localhost:${PORT}`

export default defineConfig({
  testDir: './tests/visual',
  snapshotDir: './tests/visual/snapshots',
  updateSnapshots: 'missing',
  snapshotPathTemplate:
    '{testDir}/snapshots/{testFilePath}-snapshots/{arg}-{projectName}-darwin{ext}',
  expect: {
    toHaveScreenshot: {
      threshold: 0.2,
      maxDiffPixelRatio: 0.15,
    },
  },
  use: {
    baseURL: BASE_URL,
  },
  webServer: {
    command: 'pnpm dev',
    url: BASE_URL,
    reuseExistingServer: !process.env.CI,
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'mobile-chrome',
      use: { ...devices['Pixel 5'] },
    },
  ],
})
