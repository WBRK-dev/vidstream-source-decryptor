import puppeteerManager from './puppeteerManager.js';

export default function() {
    process.puppeteerManager = new puppeteerManager();
}
