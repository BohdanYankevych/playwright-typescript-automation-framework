import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class CheckoutInformationPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async fillCustomerInformation(
    firstName: string,
    lastName: string,
    postalCode: string,
  ): Promise<void> {
    await this.fill('[data-test="firstName"]', firstName);
    await this.fill('[data-test="lastName"]', lastName);
    await this.fill('[data-test="postalCode"]', postalCode);
  }

  async continueCheckout(): Promise<void> {
    await this.click('[data-test="continue"]');
  }
}