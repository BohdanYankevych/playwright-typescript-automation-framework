import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async openLoginPage(): Promise<void> {
    await this.goto('/');
  }

  async login(username: string, password: string): Promise<void> {
    await this.fill('[data-test="username"]', username);
    await this.fill('[data-test="password"]', password);
    await this.click('[data-test="login-button"]');
  }
}