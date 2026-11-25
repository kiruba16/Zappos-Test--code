

// import (test) from `@playwright/test`
//  test (` Handling dropdown`,async(page)=>
// {
//     await pageXOffset.goto(``);
//     await page.loca
// })

// import { test, expect } from '@playwright/test';
// import fs from 'fs';
// import path from 'path';
// import { fileURLToPath } from 'url';

// const __dirname = path.dirname(fileURLToPath(import.meta.url));

// // ====== SET YOUR FILE PATH HERE ======
// const INPUT_FILE = 'C:/Users/user/Downloads/Jeyakumar V - SDET Resume.pdf';
// // =====================================

// const DOWNLOAD_DIR = path.resolve(__dirname, '../downloads');

// test('Convert PDF to Word and download automatically', async ({ page }) => {
//     test.setTimeout(300000);

//     // 0. Fail early if the PDF path is wrong
//     if (!fs.existsSync(INPUT_FILE)) {
//         throw new Error('PDF not found at: ' + INPUT_FILE);
//     }
//     fs.mkdirSync(DOWNLOAD_DIR, { recursive: true });

//     // 1. Open the page (don't wait for ads/trackers to finish loading)
//     await page.goto('https://www.ilovepdf.com/pdf_to_word', { waitUntil: 'domcontentloaded' });

//     // 2. Close the cookie banner if it appears
//     const acceptBtn = page.getByRole('button', { name: /accept|agree|allow all/i }).first();
//     if (await acceptBtn.isVisible({ timeout: 5000 }).catch(() => false)) {
//         await acceptBtn.click();
//     }

//     // 3. Upload the local file (works with the hidden file input)
//     await page.locator('input[type="file"]').first().setInputFiles(INPUT_FILE);

//     // 4. Wait for the Convert button, then click it
//     const convertBtn = page
//         .getByRole('button', { name: /convert to word/i })
//         .or(page.locator('#processTask'));
//     await expect(convertBtn.first()).toBeVisible({ timeout: 90000 });
//     await expect(convertBtn.first()).toBeEnabled({ timeout: 30000 });

//     // 5. Start listening for the download BEFORE conversion finishes
//     const downloadPromise = page.waitForEvent('download', { timeout: 240000 });

//     await convertBtn.first().click();

//     // 6. If the site does not auto-download, click the Download button when it appears
//     const downloadBtn = page
        
//     await downloadBtn.first().click({ timeout: 180000 }).catch(() => { 
//         // auto-download may already have started, so ignore this
//     });

//     // 7. Receive the file and save it
//     const download = await downloadPromise;
//     const savePath = path.join(DOWNLOAD_DIR, download.suggestedFilename());
//     await download.saveAs(savePath);

//     // 8. Verify
//     expect(fs.existsSync(savePath)).toBeTruthy();
//     expect(savePath).toMatch(/\.docx?$/i);
//     expect(fs.statSync(savePath).size).toBeGreaterThan(0);
//         await expect(convertBtn.first()).toBeVisible({ timeout: 90000 });
//     await expect(convertBtn.first()).toBeEnabled({ timeout: 30000 });



//     console.log('Downloaded file saved at:', savePath);
// });

// import{test} from '@playwright/test'

// test('launch flipkart', async({page})=>{

//    await page.goto("https://www.flipkart.com/");
//    const flip_url = await page.url();
//    console.log(flip_url)
//    const flipkart_title = await page.title();
//    console.log(flipkart_title);
//    await page.goto("https://ww.instagram.com/");
//    const insta_title = await page.title();
//    console.log(insta_title);
//     await page.screenshot({path:"C:\\Users\\Nishanth PC\\playwright\\Playwright_Screenshot\\insta1.jpg"});
//    //await page.screenshot({path:"./screenshot1/insta.png"})
//    const insta_url = await page.url();
//    console.log(insta_url);
//    await page.goBack();
//    console.log(await page.url());
//      await page.goto("https://www.flipkart.com/");
//    console.log(await page.url());

//     await page.goto("https://www.flipkart.com/");
//    console.log(await page.url());



//    await page.goto("https://www.flipkart.com/");
//    console.log(await page.url());
//   // await page.screenshot({path:"C:\\Users\\Nishanth PC\\playwright\\Playwright_Screenshot\\screenshot1.jpg"});
   

// })


// test('launch amazon', async({page})=>{

//    await page.goto("https://www.amazon.in/");
//    const amaz_url = await page.url();
//    console.log(amaz_url);
//    await page.goto("https://www.makemytrip.com/")
//    const mmy_title = await page.title();
//    console.log(mmy_title)
//    await page.goto("https://www.facebook.com/")
//    await page.goBack();
//    await page.goBack();


// })

// // @ts-check
// import {test} from '@playwright/test';
// test(" launch flipkart ",async({page})=>{
//   await page.goto("https://www.flipkart.com")
//   const pageTitle = await page.title();
//   console.log(pageTitle);
//   const currentURL = page.url();
//  console.log(currentURL);
//   await page.goto("https://www.instagram.com")
//   ////const instaTitle = await page.title();
//   ///console.log(instaTitle);
//   const instaURL = page.url();
//    console.log(instaURL);
//    await page.goBack()
//    await page.goBack()


// })

// @ts-check
import { test, expect } from '@playwright/test';

/* test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
*/
test ('Navigating to GoogleURL', async ({ page }) => {

  await page.goto('https://google.com');

  await expect(page.getByRole('combobox', { name: 'Search' })).toBeVisible();

  //Sample Comment in FeatureBranch1 wnfosdv
  
});