

// import (test) from `@playwright/test`
//  test (` Handling dropdown`,async(page)=>
// {
//     await pageXOffset.goto(``);
//     await page.loca
// })

// import { test, expect } from '@playwright/test';
// import fs from 'fs';
// import path from 'path';

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