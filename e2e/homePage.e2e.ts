import { device,by, element } from 'detox';

describe('Home Page', () => {
  beforeAll(async () => {
    await device.launchApp();
    await device.reloadReactNative();
  });

  it('should show home page', async () => {
    await expect(element(by.id('home-page'))).toBeVisible();
  });
  it('should show header', async () => {
    await expect(element(by.id('home-header'))).toBeVisible();
  });
  it('should load the first page of cards', async () => {
    await expect(element(by.id('card-container-1'))).toBeVisible();
  });
  it('should scroll down and load more cards', async () => {
    await element(by.id('pokemon-list')).scroll(1200, 'down');
    await expect(element(by.id('card-container-12'))).toBeVisible();
  });
  it('should scroll to the top of the page', async () => {
    await element(by.id('pokemon-list')).scrollTo('top');
  });
});


