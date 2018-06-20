import { TransPerfectChallangePage } from './app.po';

describe('trans-perfect-challange App', () => {
  let page: TransPerfectChallangePage;

  beforeEach(() => {
    page = new TransPerfectChallangePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
