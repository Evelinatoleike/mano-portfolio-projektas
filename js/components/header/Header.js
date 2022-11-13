// validuoti selector
// valid data
// susirasti DOM vieta, kur generuosime header (pagal selector)
// sukurti top-text
// sukurti logo
// sukurti nav
// sukurti kalbas
// sukurti search
// uzregistruoti event - scroll - position: static/fixed

import { TopText } from './TopText.js';
import { Logo } from './Logo.js';
import { Nav } from './Nav.js';
import { Search } from './Search.js';

class Header {
    constructor(selector, data) {
        this.selector = selector;
        this.data = data;

        this.DOM = null;

        this.init();
    }

    init() {
        if (!this.isValidSelector()) {
            return false;
        }
        if (!this.isValidData()) {
            return false;
        }

        const DOM = document.querySelector(this.selector);
        if (!DOM) {
            console.error('Error: pagal pateikta selector nepavyko rasti jokio elemento');
            return false;
        }

        this.DOM = DOM;

        this.DOM.classList.add('header');

        this.render();
        this.addEvents();
    }

    isValidSelector() {
        return true;
    }

    isValidData() {
        return true;
    }

    render() {
        const HTML = `<div class="row top-text"></div>
                    <div class="row"><div class="col-12 bottom-content"></div></div>`;
        this.DOM.innerHTML = HTML;

        const allRowsDOM = this.DOM.querySelectorAll('.row');

        new TopText(allRowsDOM[0], this.data.topText);
        new Logo(allRowsDOM[1], this.data.logo);
        new Nav(allRowsDOM[1], this.data.nav);
        new Search(allRowsDOM[1]);
    }

    addEvents() {
        const fixHeaderPositionAtHeight = 200;
        const staticHeaderPositionAtHeight = 40;
        addEventListener('scroll', () => {
            if (scrollY >= fixHeaderPositionAtHeight) {
                this.DOM.classList.add('fixed');
            }
            if (scrollY < staticHeaderPositionAtHeight) {
                this.DOM.classList.remove('fixed');
            }
        })
    }
}

export { Header }