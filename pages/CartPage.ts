import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class CartPage extends BasePage {
  private readonly shoppingCartLink: Locator;
  private readonly productName: Locator;
  private readonly removeBackpackButton: Locator;
  private readonly checkoutButton: Locator;

  constructor(page: Page) {
    super(page);

    this.shoppingCartLink = this.locator(
      '[data-test="shopping-cart-link"]',
    );

    this.productName = this.locator(
      '[data-test="inventory-item-name"]',
    );

    this.removeBackpackButton = this.locator(
      '[data-test="remove-sauce-labs-backpack"]',
    );

    this.checkoutButton = this.locator(
      '[data-test="checkout"]',
    );
  }

  async openCart(): Promise<void> {
    await this.click(this.shoppingCartLink);
  }

  getProductNameLocator(): Locator {
    return this.productName;
  }

  async getProductName(): Promise<string> {
    return await this.productName.innerText();
  }

  async removeBackpack(): Promise<void> {
    await this.click(this.removeBackpackButton);
  }

  async proceedToCheckout(): Promise<void> {
    await this.click(this.checkoutButton);
  }
}