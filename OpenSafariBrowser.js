const {webkit} = require('playwright');

(async () => {
        const browser = await webkit.launch({
            headless: false
        });
        const page = await browser.newPage();
        await page.goto('https://github.com/microsoft/playwright');
        await page.screenshot({
            path: 'screenshot - ${browserType.name()}.png',
        });
})();