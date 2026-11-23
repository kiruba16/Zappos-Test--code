//import test from "node:test";
import { test, expect } from '@playwright/test';

test('launch browser', async ({ page }) => {

    await page.goto('https://www.flipkart.com', {
        waitUntil: 'domcontentloaded'
    });

    // Locate search box
    await page.locator('input[="q"]').fill('sunglasses');

    // Press Enter to search
    await page.locator('input[name="q"]').press('Enter');
     await page.locator('input[name="q"]').press('Enter');

)




