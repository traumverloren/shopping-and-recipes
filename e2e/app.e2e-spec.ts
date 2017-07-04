import { ShoppingAndRecipesPage } from './app.po';

describe('shopping-and-recipes App', () => {
  let page: ShoppingAndRecipesPage;

  beforeEach(() => {
    page = new ShoppingAndRecipesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
