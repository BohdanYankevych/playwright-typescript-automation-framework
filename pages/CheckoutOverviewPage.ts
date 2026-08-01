import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class CheckoutOverviewPage extends BasePage {
  private readonly productName: Locator;
  private readonly totalPrice: Locator;
  private readonly finishButton: Locator;

  constructor(page: Page) {
    super(page);

    this.productName = this.locator(
      '[data-test="inventory-item-name"]',
    );

    this.totalPrice = this.locator(
      '[data-test="total-label"]',
    );

    this.finishButton = this.locator(
      '[data-test="finish"]',
    );
  }

  getProductNameLocator(): Locator {
    return this.productName;
  }

  getTotalPriceLocator(): Locator {
    return this.totalPrice;
  }

  async getProductName(): Promise<string> {
    return await this.productName.innerText();
  }

  async getTotalPrice(): Promise<string> {
    return await this.totalPrice.innerText();
  }

  async finishOrder(): Promise<void> {
    await this.click(this.finishButton);
  }
}