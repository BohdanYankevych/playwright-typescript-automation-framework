import { expect } from '@playwright/test';
import * as allure from 'allure-js-commons';
import { test } from '../fixtures/test-fixtures';

test('@smoke successful login to SauceDemo', async ({
  page,
  loginPage,
}) => {
  await allure.owner('Bohdan Yankevych');
  await allure.severity('critical');
  await allure.epic('SauceDemo');
  await allure.feature('Authentication');
  await allure.story('Successful Login');

  await allure.step('Open login page', async () => {
    await loginPage.openLoginPage();
  });

  await allure.step('Login with valid credentials', async () => {
    await loginPage.login(
      process.env.USERNAME!,
      process.env.PASSWORD!,
    );
  });

  await allure.step('Verify user is redirected to inventory page', async () => {
    await expect(page).toHaveURL(/inventory/);
  });
});
// webhook test