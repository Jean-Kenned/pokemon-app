import { device,by, element } from 'detox';

describe('Pokemon Page', () => {
  beforeAll(async () => {
    await device.launchApp();
    await device.reloadReactNative();
  });

  it('should click pokemon card in the home page', async () => {
    await element(by.id('card-container-1')).tap();
  });

  it('should show pokemon page container', async () => {
    await expect(element(by.id('pokemon-page'))).toBeVisible();
  });

  it('should show header', async () => {
    await expect(element(by.id('pokemon-page-header'))).toBeVisible();
  });

  it('should show pokemon image', async () => {
    await expect(element(by.id('pokemon-image'))).toBeVisible();
  });

  it('should show the pokemon text description', async () => {
    await expect(element(by.id('default-text'))).toBeVisible();
  });
});

