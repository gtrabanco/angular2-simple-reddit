import { Angular2SimpleRedditPage } from './app.po';

describe('angular2-simple-reddit App', function() {
  let page: Angular2SimpleRedditPage;

  beforeEach(() => {
    page = new Angular2SimpleRedditPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
