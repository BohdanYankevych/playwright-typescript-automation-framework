import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class InventoryPage extends BasePage {
  private readonly addBackpackButton =
    '[data-test="add-to-cart-sauce-labs-backpack"]';

  private readonly cartBadge =
    '[data-test="shopping-cart-badge"]';

  private readonly burgerMenuButton =
    '#react-burger-menu-btn';

  private readonly logoutLink =
    '[data-test="logout-sidebar-link"]';

  constructor(page: Page) {
    super(page);
  }

  async addBackpackToCart(): Promise<void> {
    await this.click(this.addBackpackButton);
  }

  async getCartBadgeText(): Promise<string> {
    return await this.locator(this.cartBadge).innerText();
  }

  async openBurgerMenu(): Promise<void> {
    await this.click(this.burgerMenuButton);
  }

  async logout(): Promise<void> {
    await this.click(this.logoutLink);
  }
}