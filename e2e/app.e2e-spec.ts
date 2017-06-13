import { AlljobsPage } from './app.po';

describe('alljobs App', () => {
  let page: AlljobsPage;

  beforeEach(() => {
    page = new AlljobsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to aj!!');
  });
});
