# Playwright TypeScript Automation Framework

UI test automation framework built with Playwright and TypeScript.

## Technologies

- Playwright
- TypeScript
- Node.js
- GitHub Actions

---

## Features

- Positive login test
- Negative login test
- Multi-browser execution
- Page Object Model (POM)
- HTML reports
- Scalable framework structure
- API GET test
- API POST test
- API PUT test
- API DELETE test

---

## Project Structure

```bash
playwright-typescript-automation-framework
│
├── pages
│   └── LoginPage.ts
│
├── tests
│   ├── api
│   │   └── users-api.spec.ts
│   │
│   ├── saucedemo-login.spec.ts
│   └── negative-login.spec.ts
│
├── .github/workflows
│   └── playwright.yml
│
├── playwright.config.ts
├── package.json
└── README.md
```

---

## Test Scenarios
### API Tests

- GET users list
- POST create new post
- PUT update post
- DELETE post

### Positive Login Test

- Open SauceDemo
- Enter valid credentials
- Click Login
- Verify successful login

### Negative Login Test

- Open SauceDemo
- Enter invalid password
- Click Login
- Verify error message

---

## Installation

Clone repository:

```bash
git clone git@github.com:BohdanYankevych/playwright-typescript-automation-framework.git
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

## Run Tests

Run all tests:

```bash
npx playwright test
```

Run specific test file:

```bash
npx playwright test tests/saucedemo-login.spec.ts
```

---

## HTML Report

Open Playwright HTML report:

```bash
npx playwright show-report
```

---

## CI/CD

GitHub Actions is configured to run Playwright tests automatically on push.

---

## Author

Bohdan Yankevych