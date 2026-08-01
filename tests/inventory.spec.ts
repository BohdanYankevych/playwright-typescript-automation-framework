import { expect } from '@playwright/test';
import * as allure from 'allure-js-commons';
import { Environment } from '../config/Environment';
import { test } from '../fixtures/test-fixtures';

test('@smoke add backpack to cart', async ({
  page,
  loginPage,
  inventoryPage,
}) => {
  await allure.owner('Bohdan Yankevych');
  await allure.severity('critical');
  await allure.epic('SauceDemo');
  await allure.feature('Inventory');
  await allure.story('Add product to cart');

  await allure.step('Open login page', async () => {
    await loginPage.openLoginPage();
  });

  await allure.step('Login with valid credentials', async () => {
    await loginPage.login(
      Environment.username,
      Environment.password,
    );
  });

  await allure.step('Verify inventory page is opened', async () => {
    await expect(page).toHaveURL(/inventory/);
  });

  await allure.step('Add Sauce Labs Backpack to cart', async () => {
    await inventoryPage.addBackpackToCart();
  });

  await allure.step('Verify cart badge contains one item', async () => {
    await expect(
      page.locator('[data-test="shopping-cart-badge"]'),
    ).toHaveText('1');
  });
});