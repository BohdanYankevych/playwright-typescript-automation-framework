import { expect } from '@playwright/test';
import * as allure from 'allure-js-commons';
import { test } from '../fixtures/test-fixtures';

test('@regression complete checkout information', async ({
  page,
  loginPage,
  inventoryPage,
  cartPage,
  checkoutInformationPage,
}) => {
  await allure.owner('Bohdan Yankevych');
  await allure.severity('critical');
  await allure.epic('SauceDemo');
  await allure.feature('Checkout');
  await allure.story('Complete customer information');

  await allure.step('Open login page', async () => {
    await loginPage.openLoginPage();
  });

  await allure.step('Login with valid credentials', async () => {
    await loginPage.login(
      process.env.USERNAME!,
      process.env.PASSWORD!,
    );
  });

  await allure.step('Add Sauce Labs Backpack to cart', async () => {
    await inventoryPage.addBackpackToCart();
  });

  await allure.step('Open cart', async () => {
    await cartPage.openCart();
  });

  await allure.step('Proceed to checkout', async () => {
    await cartPage.proceedToCheckout();
  });

  await allure.step('Fill customer information', async () => {
    await checkoutInformationPage.fillCustomerInformation(
      'John',
      'Doe',
      '10001',
    );
  });

  await allure.step('Continue checkout', async () => {
    await checkoutInformationPage.continueCheckout();
  });

  await allure.step('Verify checkout overview page is opened', async () => {
    await expect(page).toHaveURL(/checkout-step-two/);
  });
});