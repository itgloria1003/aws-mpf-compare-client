import { AwsMpfCompareClientPage } from './app.po';

describe('aws-mpf-compare-client App', function() {
  let page: AwsMpfCompareClientPage;

  beforeEach(() => {
    page = new AwsMpfCompareClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
