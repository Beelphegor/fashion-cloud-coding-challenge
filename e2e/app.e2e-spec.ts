import { FashionCloudCodingChallengePage } from './app.po';

describe('fashion-cloud-coding-challenge App', () => {
  let page: FashionCloudCodingChallengePage;

  beforeEach(() => {
    page = new FashionCloudCodingChallengePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
