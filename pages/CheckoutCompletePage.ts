import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class CheckoutCompletePage extends BasePage {
  private readonly completeHeader =
    '[data-test="complete-header"]';

  private readonly completeMessage =
    '[data-test="complete-text"]';

  private readonly backHomeButton =
    '[data-test="back-to-products"]';

  constructor(page: Page) {
    super(page);
  }

  async getCompleteHeader(): Promise<string> {
    return await this.locator(this.completeHeader).innerText();
  }

  async getCompleteMessage(): Promise<string> {
    return await this.locator(this.completeMessage).innerText();
  }

  async backHome(): Promise<void> {
    await this.click(this.backHomeButton);
  }
}