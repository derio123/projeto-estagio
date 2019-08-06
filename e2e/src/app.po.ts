import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/cadastrar');
  }

  getParagraphText() {
    return element(by.tagName('h1')).getText();
  }
}
