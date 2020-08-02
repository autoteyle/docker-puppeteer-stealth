const puppeteer = require('puppeteer-extra')
const dns = require('dns').promises
const assert = require('assert')
const process = require('process')

const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())

const remoteDebuggingPort = process.env.REMOTE_DEBUGGING_PORT || 9222;
const remoteDebuggingHostname = process.env.REMOTE_DEBUGGING_HOSTNAME || 'chrome';

async function main() {
    const { address: remoteDebuggingAddress } = await dns.lookup(remoteDebuggingHostname)

    const browser = await puppeteer.connect({
        browserURL: `http://${remoteDebuggingAddress}:${remoteDebuggingPort}`
    });

    const page = await browser.newPage()
    const response = await page.goto('https://google.com')

    assert(response.ok())
    await page.close()
    await browser.disconnect()
}

main()
    .then(console.log)
    .catch(console.error);
