import { Locator, Page } from '@playwright/test';

export class BasePage {
  constructor(protected page: Page) {}

  protected locator(selector: string): Locator {
    return this.page.locator(selector);
  }

  protected async goto(url: string): Promise<void> {
    await this.page.goto(url);
  }

  protected async click(selector: string): Promise<void> {
    await this.locator(selector).click();
  }

  protected async fill(
    selector: string,
    value: string,
  ): Promise<void> {
    await this.locator(selector).fill(value);
  }
}