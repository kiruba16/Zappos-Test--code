// import { expect } from "allure-playwright";
// import test from "node:test";

// import { expect, test } from '@playwright/test'
// test('iframe',async({page})=>
//     {
//     await page.goto("https://practice-automation.com/iframes/")
//     const frame=page.frameLocator("#iframe-1")
//     await frame.locator("//a[text()='MCP']").click()
//     await frame.getByRole('link', { name: 'Installation' }).first().click();
//     await page.getByRole("link",{name:"Home"});

//     const frame2= page.frameLocator("#iframe-2")
//     //await page.waitForTimeout(3000); 
//     //await frame2.locator("//a[contains(@class, 'nav-link') and text()='Downloads']").click()
//     //page.getByRole('link', { name: 'Downloads' }).click()
//     page.locator('a[href="/downloads"] span').click()




// })

// import { test, expect } from '@playwright/test';

// test('iframe interaction test', async ({ page }) => {
//   test.setTimeout(60000);

//   await page.goto('https://practice-automation.com/iframes/');

//   const frame1 = page.frameLocator('#iframe-1');
//   await frame1.getByRole('link', { name: 'MCP' }).first().click();
//   await frame1.getByRole('link', { name: 'Installation' }).first().click();

//   const frame2 = page.frameLocator('#iframe-2');

//   // open the hamburger menu, then click the link
//   await frame2.locator('.navbar-toggler').click();
//   await frame2.getByRole('link', { name: 'Downloads' }).first().click();
// });


import {test} from "@playwright/test"
test("test handling",async({page})=>{
    await page.goto("https://www.globalsqa.com/demo-site/frames-and-windows/#iFrame");
    const frame =page.frameLocator("#iframe");
    await frame.locator("//a[contains(text(), 'JMeter Training')]").click()
    await frame.getByRole("id",{name:"mobile_menu_toggler"}).click()

})
import { test, expect } from '@playwright/test';

test('frame handling', async ({ page }) => {
  await page.goto('https://www.globalsqa.com/demo-site/frames-and-windows/#iFrame');
  const frame = page.frameLocator('iframe[name="globalSqa"]');
  await frame.getByRole('link', { name: 'JMeter Training' }).first().click();
  await frame.locator('#mobile_menu_toggler').click();
  await frame.getByRole('link', { name: 'About', exact: true }).first().click();
});
   import {test} from "@playwright/test";
   test(" frame handing 3 ", async({page})=>{
    await page.goto("https://www.hyrtutorials.com/p/frames-practice.html");
    const frame = page.frameLocator()
   })
