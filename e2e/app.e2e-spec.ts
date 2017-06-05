import { TravelRepublicPage } from './app.po';

describe('travel-republic App', () => {
  let page: TravelRepublicPage;

  beforeEach(() => {
    page = new TravelRepublicPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
