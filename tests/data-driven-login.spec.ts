import { test, expect } from '../fixtures/test-fixtures';
import users from '../test-data/login-users.json';

const validUser = users[0];
const invalidUser = users[1];

test(`successful login for ${validUser.username}`, async ({
  page,
  loginPage,
}) => {
  await loginPage.openLoginPage();

  await loginPage.login(
    validUser.username,
    validUser.password,
  );

  await expect(page).toHaveURL(/inventory/);
});

test(`failed login for ${invalidUser.username}`, async ({
  page,
  loginPage,
}) => {
  await loginPage.openLoginPage();

  await loginPage.login(
    invalidUser.username,
    invalidUser.password,
  );

  await expect(
    page.locator('[data-test="error"]'),
  ).toBeVisible();
});
