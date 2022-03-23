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
});


