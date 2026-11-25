import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// ====== SET YOUR FILE PATH HERE ======
const INPUT_FILE = 'C:/Users/user/Downloads/Jeyakumar V - SDET Resume.pdf';
// =====================================

const DOWNLOAD_DIR = path.resolve(__dirname, '../downloads');

test('Convert PDF to Word and download automatically', async ({ page }) => {
    test.setTimeout(300000);

    // 0. Fail early if the PDF path is wrong
    if (!fs.existsSync(INPUT_FILE)) {
        throw new Error('PDF not found at: ' + INPUT_FILE);
    }
    fs.mkdirSync(DOWNLOAD_DIR, { recursive: true });

    // 1. Open the page (don't wait for ads/trackers to finish loading)
    await page.goto('https://www.ilovepdf.com/pdf_to_word', { waitUntil: 'domcontentloaded' });

    // 2. Close the cookie banner if it appears
    // const acceptBtn = page.getByRole('button', { name: /accept|agree|allow all/i }).first();
    // if (await acceptBtn.isVisible({ timeout: 5000 }).catch(() => false)) {
    //     await acceptBtn.click();
    }

    // 3. Upload the local file (works with the hidden file input)
    await page.locator('input[type="file"]').first().setInputFiles(INPUT_FILE);

    // 4. Wait for the Convert button, then click it
    

    // 5. Start listening for the download BEFORE conversion finishes
    const downloadPromise = page.waitForEvent('download', { timeout: 240000 });

    await convertBtn.first().click();

    // 6. If the site does not auto-download, click the Download button when it appears
    const downloadBtn = page
        // .getByRole('link', { name: /download word/i })
        // .or(page.getByRole('button', { name: /download word/i }))
        // .or(page.locator('#pickfiles'));
    await downloadBtn.first().click({ timeout: 180000 }).catch(() => {
        // auto-download may already have started, so ignore this
    });



    // 8. Verify
    expect(fs.existsSync(savePath)).toBeTruthy();


    console.log('Downloaded file saved at:', savePath);
//});