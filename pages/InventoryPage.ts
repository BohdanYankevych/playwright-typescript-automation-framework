import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class InventoryPage extends BasePage {
  private readonly addBackpackButton: Locator;
  private readonly cartBadge: Locator;

  constructor(page: Page) {
    super(page);

    this.addBackpackButton = this.locator(
      '[data-test="add-to-cart-sauce-labs-backpack"]',
    );

    this.cartBadge = this.locator(
      '[data-test="shopping-cart-badge"]',
    );
  }

  async addBackpackToCart(): Promise<void> {
    await this.click(this.addBackpackButton);
  }

  getCartBadgeLocator(): Locator {
    return this.cartBadge;
  }

  async getCartBadgeText(): Promise<string> {
    return await this.cartBadge.innerText();
  }
}