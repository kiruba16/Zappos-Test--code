// @ts-check
import {test} from '@playwright/test';
test(" launch flipkart ",async({page})=>{
  await page.goto("https://www.flipkart.com")
  const pageTitle = await page.title();
  console.log(pageTitle);
  const currentURL = page.url();
  //command 
 ///console.log(currentURL);
  await page.goto("https://www.instagram.com")
  ////const instaTitle = await page.title();
  ///console.log(instaTitle);
  const instaURL = page.url();
   console.log(instaURL);
   await page.goBack()
   await page.goBack()


})

