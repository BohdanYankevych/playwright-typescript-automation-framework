import { expect } from '@playwright/test';
import * as allure from 'allure-js-commons';
import { Environment } from '../config/Environment';
import { test } from '../fixtures/test-fixtures';

test('@regression complete purchase flow', async ({
  page,
  loginPage,
  inventoryPage,
  cartPage,
  checkoutInformationPage,
  checkoutOverviewPage,
  checkoutCompletePage,
  burgerMenu,
}) => {
  await allure.owner('Bohdan Yankevych');
  await allure.severity('blocker');
  await allure.epic('SauceDemo');
  await allure.feature('Purchase');
  await allure.story('Complete order from login to confirmation');

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

  await allure.step('Open cart', async () => {
    await cartPage.openCart();
  });

  await allure.step('Verify product is displayed in cart', async () => {
    await expect(
      cartPage.getProductNameLocator(),
    ).toHaveText('Sauce Labs Backpack');
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

  await allure.step('Continue to checkout overview', async () => {
    await checkoutInformationPage.continueCheckout();
  });

  await allure.step('Verify checkout overview page is opened', async () => {
    await expect(page).toHaveURL(/checkout-step-two/);
  });

  await allure.step('Verify product on checkout overview', async () => {
    await expect(
      checkoutOverviewPage.getProductNameLocator(),
    ).toHaveText('Sauce Labs Backpack');
  });

  await allure.step('Verify total price is displayed', async () => {
    await expect(
      checkoutOverviewPage.getTotalPriceLocator(),
    ).toContainText('Total: $');
  });

  await allure.step('Finish order', async () => {
    await checkoutOverviewPage.finishOrder();
  });

  await allure.step('Verify successful order confirmation', async () => {
    await expect(page).toHaveURL(/checkout-complete/);

    await expect(
      checkoutCompletePage.getCompleteHeaderLocator(),
    ).toHaveText('Thank you for your order!');
  });

  await allure.step('Return to inventory page', async () => {
    await checkoutCompletePage.backHome();
    await expect(page).toHaveURL(/inventory/);
  });

  await allure.step('Logout from SauceDemo', async () => {
    await burgerMenu.open();
    await burgerMenu.logout();

    await expect(page).toHaveURL('/');
  });
});