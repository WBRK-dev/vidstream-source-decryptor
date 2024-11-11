import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";

puppeteer.use(StealthPlugin());

export default class {

    initializing = false;

    browser;
    pages;

    constructor() {
        this.init();
    }

    async init() {
        if (this.initializing) return;
        this.initializing = true;
        this.browser = await puppeteer.launch({ headless: false });
        this.initializing = false;
    }

    async waitUntilInitialized() {
        if (!this.initializing) return;
        while(this.initializing) {
            await new Promise(resolve => setTimeout(resolve, 500));
        }
    }

    async getPage() {
        await this.waitUntilInitialized();

        if ((await this.browser.pages()).length < 10) {
            return await this.browser.newPage();
        }

        throw new Error("Maximum number of pages reached");
    }



    // getRandomId() {
    //     return Math.random().toString(36).substring(2);
    // }

}
