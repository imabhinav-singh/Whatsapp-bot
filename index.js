
const puppeteer = require("puppeteer");

// Login Function Logic
(async function main() {
  try {
    // Configures puppeteer
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.setUserAgent(
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36"
    );

    //Navigates to Whatsapp
    await page.goto("https://web.whatsapp.com/");

    // //Searches person by title
    await page.waitForSelector("._1C6Zl");
    await delay(10000);

    //Change to contact you want to send messages to
    const contactName = "Mudit new";
    await page.click(`span[title='${contactName}']`);
    await page.waitForSelector("div.DuUXI");
    //Finds the message bar and focuses on it
    await page.click("div.DuUXI");

    //Amount of messages you want to send
    const amountOfMessages = 5;

    //Loops through cycle of sending message
    for (var i = 0; i < amountOfMessages; i++) {
    	await page.focus("div.DuUXI");
      await page.type('div.DuUXI', 'Thanku');
      await page.click("span[data-testid='send']");
      // await page.keyboard.press('Enter');
      await delay(500);
    }

  } catch (e) {
    console.error("error mine", e);
  }
})();

function delay(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
}