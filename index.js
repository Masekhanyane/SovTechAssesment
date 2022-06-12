const { WebElement } = require("selenium-webdriver");
const {Builder, By, key, RETURN, util} = require("selenium-webdriver");
// Require modules used in the logic below
/* require('chromedriver');
const driver = new Builder()
    .forBrowser('chrome')
    .build();  */

async function autoTest() {

	//launching the browser
	let driver = await new Builder().forBrowser("firefox").build();

	//navigating to the sovTech contact page
	await driver.get("https://www.sovtech.co.za/contact-us/");

	//fill in form
	await driver.findElement(By.name("your_name"))
	.sendKeys("Mase Moeketsi", key.RETURN);
	await driver.findElement(By.name("email")).
	sendKeys("tonto.moeketsi@gmail.com", key.RETURN);
	await driver.findElement(By.name("mobilephone"))
	.sendKeys("0786001154", key.RETURN);
	await driver.findElement(By.name("numemployees"))
	.sendKeys("45", key.RETURN);
	await driver.findElement(By.name("what_kind_of_problem_is_your_business_currently_facing_"))
	.sendKeys("Mase Moeketsi", key.RETURN);
	await driver.findElement(By.name("message"))
	.sendKeys("Kindly assist me with a Tech revamp", key.RETURN);
	
	//checkbox handler
	// Selecting CheckBox	
	// This will Toggle the Check box 	
	await driver.findElement(By.name("LEGAL_CONSENT.subscription_type_1084106")).click();

	//submit button
	await driver.findElement(By.class("hs_submit")).click();

	//clicking on the facebook icon
	await driver.findElement(By.class("fab fa-facebbok")).click();

	//close browser
	await driver.quit();
	
}
autoTest();