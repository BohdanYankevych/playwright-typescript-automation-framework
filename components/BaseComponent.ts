import { Locator, Page } from '@playwright/test';

export class BaseComponent {
  constructor(protected readonly page: Page) {}

  protected locator(selector: string): Locator {
    return this.page.locator(selector);
  }

  protected async click(selector: string): Promise<void> {
    await this.locator(selector).click();
  }
}