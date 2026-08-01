import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class CartPage extends BasePage {
  private readonly shoppingCartLink =
    '[data-test="shopping-cart-link"]';

  private readonly productName =
    '[data-test="inventory-item-name"]';

  private readonly removeBackpackButton =
    '[data-test="remove-sauce-labs-backpack"]';

  private readonly checkoutButton =
    '[data-test="checkout"]';

  constructor(page: Page) {
    super(page);
  }

  async openCart(): Promise<void> {
    await this.click(this.shoppingCartLink);
  }

  getProductNameLocator(): Locator {
    return this.locator(this.productName);
  }

  async getProductName(): Promise<string> {
    return await this.getProductNameLocator().innerText();
  }

  async removeBackpack(): Promise<void> {
    await this.click(this.removeBackpackButton);
  }

  async proceedToCheckout(): Promise<void> {
    await this.click(this.checkoutButton);
  }
}