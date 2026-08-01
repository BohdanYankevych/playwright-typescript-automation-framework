import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class CheckoutOverviewPage extends BasePage {
  private readonly productName =
    '[data-test="inventory-item-name"]';

  private readonly totalPrice =
    '[data-test="total-label"]';

  private readonly finishButton =
    '[data-test="finish"]';

  constructor(page: Page) {
    super(page);
  }

  async getProductName(): Promise<string> {
    return await this.locator(this.productName).innerText();
  }

  async getTotalPrice(): Promise<string> {
    return await this.locator(this.totalPrice).innerText();
  }

  async finishOrder(): Promise<void> {
    await this.click(this.finishButton);
  }
}