describe('Home Page', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should show home page', async () => {
    await expect(element(by.id('home-page'))).toBeVisible();
  });
});
