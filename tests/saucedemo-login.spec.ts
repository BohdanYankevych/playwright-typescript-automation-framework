import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('successful login to SauceDemo', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.openLoginPage();

  await loginPage.login('standard_user', 'secret_sauce');

  await expect(page).toHaveURL(/inventory/);

});