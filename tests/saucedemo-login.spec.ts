import { test, expect } from '../fixtures/test-fixtures';

test('@smoke successful login to SauceDemo', async ({ page, loginPage }) => {
  await loginPage.openLoginPage();

  await loginPage.login(
    process.env.USERNAME!,
    process.env.PASSWORD!,
  );

  await expect(page).toHaveURL(/inventory/);
});