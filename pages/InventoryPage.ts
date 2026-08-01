import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class InventoryPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async addBackpackToCart(): Promise<void> {
    await this.click('[data-test="add-to-cart-sauce-labs-backpack"]');
  }

  async getCartBadgeText(): Promise<string> {
    return await this.locator('[data-test="shopping-cart-badge"]').innerText();
  }
}