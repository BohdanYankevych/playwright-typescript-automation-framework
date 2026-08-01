import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class CheckoutCompletePage extends BasePage {
  private readonly completeHeader: Locator;
  private readonly completeMessage: Locator;
  private readonly backHomeButton: Locator;

  constructor(page: Page) {
    super(page);

    this.completeHeader = this.locator(
      '[data-test="complete-header"]',
    );

    this.completeMessage = this.locator(
      '[data-test="complete-text"]',
    );

    this.backHomeButton = this.locator(
      '[data-test="back-to-products"]',
    );
  }

  getCompleteHeaderLocator(): Locator {
    return this.completeHeader;
  }

  getCompleteMessageLocator(): Locator {
    return this.completeMessage;
  }

  async getCompleteHeader(): Promise<string> {
    return await this.completeHeader.innerText();
  }

  async getCompleteMessage(): Promise<string> {
    return await this.completeMessage.innerText();
  }

  async backHome(): Promise<void> {
    await this.click(this.backHomeButton);
  }
}