import { MyEcommerceAppTemplatePage } from './app.po';

describe('MyEcommerceApp App', function() {
  let page: MyEcommerceAppTemplatePage;

  beforeEach(() => {
    page = new MyEcommerceAppTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
