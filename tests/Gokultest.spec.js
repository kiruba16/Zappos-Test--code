// import {test} from '@playwright/test'

// test('test1', async({page})=>{

//     await page.goto('https://www.amazon.in/');
// })

import { test, expect } from '@playwright/test';

test('Google search test', async ({ page }) => {

    // Open Google website
    await page.goto('https://www.google.com');

    // Enter text in Google search box
    await page.locator('textarea[name="q"]').fill('Playwright automation');

    // Verify entered text
    await expect(page.locator('textarea[name="q"]')).toHaveValue('Playwright automation');

});
