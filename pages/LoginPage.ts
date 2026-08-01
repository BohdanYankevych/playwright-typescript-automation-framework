import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  private readonly usernameInput =
    this.locator('[data-test="username"]');

  private readonly passwordInput =
    this.locator('[data-test="password"]');

  private readonly loginButton =
    this.locator('[data-test="login-button"]');

  constructor(page: Page) {
    super(page);
  }

  async openLoginPage(): Promise<void> {
    await this.goto('/');
  }

  async login(
    username: string,
    password: string,
  ): Promise<void> {
    await this.fill(
      this.usernameInput,
      username,
    );

    await this.fill(
      this.passwordInput,
      password,
    );

    await this.click(this.loginButton);
  }
}