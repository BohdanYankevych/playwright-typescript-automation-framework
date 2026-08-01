import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class CartPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async openCart(): Promise<void> {
    await this.click('[data-test="shopping-cart-link"]');
  }

  async getProductName(): Promise<string> {
    return await this.locator('[data-test="inventory-item-name"]').innerText();
  }

  async removeBackpack(): Promise<void> {
    await this.click('[data-test="remove-sauce-labs-backpack"]');
  }

  async proceedToCheckout(): Promise<void> {
    await this.click('[data-test="checkout"]');
  }
}