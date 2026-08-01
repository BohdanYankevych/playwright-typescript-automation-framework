import { Locator, Page } from '@playwright/test';
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

  getCompleteHeaderLocator(): Locator {
    return this.locator(this.completeHeader);
  }

  getCompleteMessageLocator(): Locator {
    return this.locator(this.completeMessage);
  }

  async getCompleteHeader(): Promise<string> {
    return await this.getCompleteHeaderLocator().innerText();
  }

  async getCompleteMessage(): Promise<string> {
    return await this.getCompleteMessageLocator().innerText();
  }

  async backHome(): Promise<void> {
    await this.click(this.backHomeButton);
  }
}