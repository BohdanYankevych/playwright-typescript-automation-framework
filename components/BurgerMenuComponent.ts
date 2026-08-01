import { Page } from '@playwright/test';
import { BaseComponent } from './BaseComponent';

export class BurgerMenuComponent extends BaseComponent {
  private readonly menuButton = '#react-burger-menu-btn';

  private readonly logoutLink =
    '[data-test="logout-sidebar-link"]';

  constructor(page: Page) {
    super(page);
  }

  async open(): Promise<void> {
    await this.click(this.menuButton);
  }

  async logout(): Promise<void> {
    await this.click(this.logoutLink);
  }
}