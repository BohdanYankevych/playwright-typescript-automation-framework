import { test, expect } from '../fixtures/test-fixtures';

test('should show error for invalid password', async ({
  page,
  loginPage,
}) => {
  await loginPage.openLoginPage();

  await loginPage.login(
    process.env.USERNAME!,
    'wrong_password',
  );

  await expect(page.locator('[data-test="error"]')).toBeVisible();

  await expect(page.locator('[data-test="error"]')).toContainText(
    'Username and password do not match',
  );
});