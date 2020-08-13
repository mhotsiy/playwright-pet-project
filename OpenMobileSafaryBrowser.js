const {gecko, chromium, webkit, devices} = require('playwright');
const iPhoneX = devices["iPhone X"];

(async () => {
        const browser = await webkit.launch({
            headless: false
        });
        const context = await browser.newContext({
            ...iPhoneX
        });
        const page = await context.newPage();
        await page.screenshot({
            path: 'screenshot - ${browserType.name()}.png',
        });
        await page.goto('https://github.com/microsoft/playwright');
        await page.screenshot({
            path: 'screenshot - ${browserType.name()}.png',
        });
})();