import { ClientRoutingPage } from './app.po';

describe('client-routing App', function() {
  let page: ClientRoutingPage;

  beforeEach(() => {
    page = new ClientRoutingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
