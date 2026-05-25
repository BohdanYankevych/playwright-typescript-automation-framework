import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('successful login to SauceDemo', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.openLoginPage();

  await loginPage.login(
  process.env.USERNAME!,
  process.env.PASSWORD!
);

  await expect(page).toHaveURL(/inventory/);

});