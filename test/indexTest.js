const expect = require('chai').expect;
const fs = require('fs');
const path = require('path');
const htmlFile = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf-8');
const { JSDOM } = require('jsdom');
const { window } = new JSDOM(htmlFile);
const { document } = window;

describe('index.html', () => {
    describe('the title-box section', () => {
        it('has a <h4> element with the correct content', () => {
            const h4 = document.querySelector('.title-box h4');
            expect(h4).not.to.be.null;
            expect(h4.textContent).to.contain('FROM DESPICABLE ME 2');
        });

        it('has a <h2> element with the correct content', () => {
            const h2 = document.querySelector('.title-box h2');
            expect(h2).not.to.be.null;
            expect(h2.textContent).to.contain('HAPPY');
        });

        it('has a second <h4> element with the correct content', () => {
            const h4s = document.querySelectorAll('.title-box h4');
            expect(h4s).to.have.lengthOf(2);
            expect(h4s[1].textContent).to.contain('WRITTEN BY PHARRELL WILLIAMS');
        });
    });

    describe('the back section', () => {
        it('has a <h3> tag with the correct contents', () => {
            const h3 = document.querySelector('.back h3');
            expect(h3).not.to.be.null;
            expect(h3.textContent).to.contain('PUBLISHED BY EMI APRIL MUSIC');
        });

        it('has a <h1> tag with the correct contents', () => {
            const h1 = document.querySelector('.back h1');
            expect(h1).not.to.be.null;
            expect(h1.textContent).to.contain('BACKGROUND VOCALS PERFORMED');
        });

        it('has a second <h3> tag with the correct contents', () => {
            const h3s = document.querySelectorAll('.back h3');
            expect(h3s).to.have.lengthOf(2);
            expect(h3s[1].textContent).to.contain('PRODUCED BY PHARRELL WILLIAMS');
        });

        it('has a <p> tag with the correct contents', () => {
            const p = document.querySelector('.back p');
            expect(p).not.to.be.null;
            expect(p.textContent).to.contain('RECORDED BY MIKE LARSON');
        });

        it('has a <span> tag with the correct contents', () => {
            const span = document.querySelector('.back span');
            expect(span).not.to.be.null;
            expect(span.textContent).to.contain('ASSISTED BY MATTHEW DESRAMEAUX');
        });

        it('has a <img> tag with the correct attributes', () => {
            const img = document.querySelector('.back img');
            expect(img).not.to.be.null;
            expect(img.getAttribute('src')).to.contain('images/happy.png');
            expect(img.getAttribute('alt')).to.contain('Album Cover');
        });

        it('has a second <span> tag with the correct contents', () => {
            const spans = document.querySelectorAll('.back span');
            expect(spans).to.have.lengthOf(3);
            expect(spans[1].textContent).to.contain('DIGITAL EDITING AND ARRANGEMENT BY ANDREW COLEMAN');
        });

        it('has a second <img> tag with the correct attributes', () => {
            const imgs = document.querySelectorAll('.back img');
            expect(imgs).to.have.lengthOf(2);
            expect(imgs[1].getAttribute('src')).to.contain('images/back.png');
            expect(imgs[1].getAttribute('alt')).to.contain('Back Cover');
        });
    });
});
