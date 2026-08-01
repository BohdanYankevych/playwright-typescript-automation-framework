import { Locator, Page } from '@playwright/test';

export class BasePage {
  constructor(protected readonly page: Page) {}

  protected locator(selector: string): Locator {
    return this.page.locator(selector);
  }

  protected async goto(url: string): Promise<void> {
    await this.page.goto(url);
  }

  protected async click(locator: Locator): Promise<void> {
    await locator.click();
  }

  protected async fill(
    locator: Locator,
    value: string,
  ): Promise<void> {
    await locator.fill(value);
  }
}