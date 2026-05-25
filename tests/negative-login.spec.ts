import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('should show error for invalid password', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.openLoginPage();

  await loginPage.login('standard_user', 'wrong_password');

  await expect(page.locator('[data-test="error"]')).toBeVisible();

  await expect(page.locator('[data-test="error"]')).toContainText(
    'Username and password do not match'
  );

});