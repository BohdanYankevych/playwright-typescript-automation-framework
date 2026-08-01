import { Locator, Page } from '@playwright/test';
import { Customer } from '../models/Customer';
import { BasePage } from './BasePage';

export class CheckoutInformationPage extends BasePage {
  private readonly firstNameInput: Locator;
  private readonly lastNameInput: Locator;
  private readonly postalCodeInput: Locator;
  private readonly continueButton: Locator;

  constructor(page: Page) {
    super(page);

    this.firstNameInput = this.locator(
      '[data-test="firstName"]',
    );

    this.lastNameInput = this.locator(
      '[data-test="lastName"]',
    );

    this.postalCodeInput = this.locator(
      '[data-test="postalCode"]',
    );

    this.continueButton = this.locator(
      '[data-test="continue"]',
    );
  }

  async fillCustomerInformation(
    customer: Customer,
  ): Promise<void> {
    await this.fill(
      this.firstNameInput,
      customer.firstName,
    );

    await this.fill(
      this.lastNameInput,
      customer.lastName,
    );

    await this.fill(
      this.postalCodeInput,
      customer.postalCode,
    );
  }

  async continueCheckout(): Promise<void> {
    await this.click(this.continueButton);
  }
}