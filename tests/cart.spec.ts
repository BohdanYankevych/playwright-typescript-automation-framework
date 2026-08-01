import { expect } from '@playwright/test';
import * as allure from 'allure-js-commons';
import { Environment } from '../config/Environment';
import { test } from '../fixtures/test-fixtures';

test('@regression add product and verify it in cart', async ({
  page,
  loginPage,
  inventoryPage,
  cartPage,
}) => {
  await allure.owner('Bohdan Yankevych');
  await allure.severity('critical');
  await allure.epic('SauceDemo');
  await allure.feature('Cart');
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

  await allure.step('Add Sauce Labs Backpack to cart', async () => {
    await inventoryPage.addBackpackToCart();
  });

  await allure.step('Open cart', async () => {
    await cartPage.openCart();
  });

  await allure.step('Verify cart page is opened', async () => {
    await expect(page).toHaveURL(/cart/);
  });

  await allure.step('Verify backpack is displayed in cart', async () => {
    await expect(
      cartPage.getProductNameLocator(),
    ).toHaveText('Sauce Labs Backpack');
  });
});