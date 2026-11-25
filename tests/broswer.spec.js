// //import test from "node:test";
// import { test, expect } from '@playwright/test';

// test('launch browser', async ({ page }) => {

//     await page.goto('https://www.flipkart.com', {
//         waitUntil: 'domcontentloaded'
//     });

//     // Locate search box
//     await page.locator('input[="q"]').fill('sunglasses');

//     // Press Enter to search
//     await page.locator('input[name="q"]').press('Enter');
//      await page.locator('input[name="q"]').press('Enter');

// )

import { test, expect } from '@playwright/test';

test('google search', async ({ page }) => {
  await page.goto('https://www.google.com', { waitUntil: 'domcontentloaded' });

  // Accept cookie popup if it appears (safe to skip if not)
  const accept = page.getByRole('button', { name: /accept all/i });
  if (await accept.isVisible({ timeout: 3000 }).catch(() => false)) {
    await accept.click();
  }

  await page.locator('textarea[name="q"]').fill('Playwright');
  await page.keyboard.press('Enter');

  await expect(page).toHaveTitle(/Playwright/, { timeout: 15000 });
});




