import puppeteer from 'puppeteer';

var stream = require('stream');
var Writable = stream.Writable || require('readable-stream').Writable;

export default async function handler(req, res) {    
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:3000', {
        waitUntil: 'networkidle2',
    });
    const pdf = await page.pdf({ path: '/tmp/hn.pdf', format: 'a4' });

    await browser.close();

    // return image.toString('base64');
    res.setHeader('Content-Type', 'application/pdf')
    res.send(pdf)
}