//import org.openqa.selenium.WebElement;

const { WebElement } = require("selenium-webdriver");
const {Builder, By, key} = require("selenium-webdriver");

async function example() {

    //launching the browser
    let driver = await new Builder().forBrowser("firefox").build();

    //navigating to the sovTech contact page
    await driver.get("https://www.sovtech.co.za/contact-us/");

    //fill in form

    y_name = driver.findElement(By.id("your_name-c2e387f9-4bd8-496f-ab2a-81fbbc31712a"))
   .sendKeys("Mase Moeketsi", key.ENTER);
/*     await driver.findElement(By.id("email-c2e387f9-4bd8-496f-ab2a-81fbbc31712a")).sendKeys("tonto.moeketsi@gmail.com", key.RETURN);
    await driver.findElement(By.id("mobilephone-c2e387f9-4bd8-496f-ab2a-81fbbc31712a")).sendKeys("0786001154", key.RETURN);
    await driver.findElement(By.id("numemployees-c2e387f9-4bd8-496f-ab2a-81fbbc31712a")).sendKeys("Mase Moeketsi", key.RETURN);
    await driver.findElement(By.id("what_kind_of_problem_is_your_business_currently_facing_-c2e387f9-4bd8-496f-ab2a-81fbbc31712a")).sendKeys("Mase Moeketsi", key.RETURN);
    await driver.findElement(By.id("message-c2e387f9-4bd8-496f-ab2a-81fbbc31712a")).sendKeys("Kindly assist me with a Tech revamp", key.RETURN);
 */
//submit form
 

    //close browser
    await driver.quit();
    
}
example()