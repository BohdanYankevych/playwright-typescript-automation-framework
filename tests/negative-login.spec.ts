import { expect, test } from '../fixtures/test-fixtures';
import { Environment } from '../config/Environment';

test('@regression should show error for invalid password', async ({
  page,
  loginPage,
}) => {
  await loginPage.openLoginPage();

  await loginPage.login(
    Environment.username,
    'wrong_password',
  );

  await expect(
    page.locator('[data-test="error"]'),
  ).toBeVisible();

  await expect(
    page.locator('[data-test="error"]'),
  ).toContainText(
    'Username and password do not match',
  );
});