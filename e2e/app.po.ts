import { browser, by, element } from 'protractor';

export class AlljobsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('aj-root h1')).getText();
  }
}
