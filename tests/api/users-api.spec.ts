import { test, expect } from '@playwright/test';
import * as allure from 'allure-js-commons';
import { ContentType } from 'allure-js-commons';

test('@api GET users list', async ({ request }) => {
  await allure.epic('API');
  await allure.feature('Users');
  await allure.story('Get users list');
  await allure.owner('Bohdan Yankevych');
  await allure.severity('critical');
  await allure.description(
    'Verify that the users endpoint returns a non-empty list with the expected user properties.',
  );

  const response = await request.get(
    'https://jsonplaceholder.typicode.com/users',
  );

  await allure.step('Verify response status is 200', async () => {
    expect(response.status()).toBe(200);
  });

  const responseBody = await response.json();

  await allure.step('Verify users list is not empty', async () => {
    expect(responseBody.length).toBeGreaterThan(0);
  });

  await allure.step('Verify first user contains required properties', async () => {
    expect(responseBody[0]).toHaveProperty('id');
    expect(responseBody[0]).toHaveProperty('email');
    expect(responseBody[0]).toHaveProperty('name');
  });
});

test('@api POST create new post', async ({ request }) => {
  await allure.epic('API');
  await allure.feature('Posts');
  await allure.story('Create new post');
  await allure.owner('Bohdan Yankevych');
  await allure.severity('critical');
  await allure.description(
    'Verify that a new post can be created with the expected title, body, and user ID.',
  );

  const requestBody = {
    title: 'QA Automation',
    body: 'Playwright API test',
    userId: 1,
  };

  await allure.attachment(
    'Request Body',
    JSON.stringify(requestBody, null, 2),
    ContentType.JSON,
  );

  const response = await request.post(
    'https://jsonplaceholder.typicode.com/posts',
    {
      data: requestBody,
    },
  );

  await allure.step('Verify response status is 201', async () => {
    expect(response.status()).toBe(201);
  });

  const responseBody = await response.json();

  await allure.attachment(
    'Response Body',
    JSON.stringify(responseBody, null, 2),
    ContentType.JSON,
  );

  await allure.step('Verify created post response data', async () => {
    expect(responseBody).toHaveProperty('id');
    expect(responseBody.title).toBe(requestBody.title);
    expect(responseBody.body).toBe(requestBody.body);
    expect(responseBody.userId).toBe(requestBody.userId);
  });
});

test('@api PUT update post', async ({ request }) => {
  await allure.epic('API');
  await allure.feature('Posts');
  await allure.story('Update existing post');
  await allure.owner('Bohdan Yankevych');
  await allure.severity('critical');
  await allure.description(
    'Verify that an existing post can be updated with new content.',
  );

  const requestBody = {
    id: 1,
    title: 'Updated Title',
    body: 'Updated body content',
    userId: 1,
  };

  const response = await request.put(
    'https://jsonplaceholder.typicode.com/posts/1',
    {
      data: requestBody,
    },
  );

  await allure.step('Verify response status is 200', async () => {
    expect(response.status()).toBe(200);
  });

  const responseBody = await response.json();

  await allure.step('Verify updated post response data', async () => {
    expect(responseBody.id).toBe(requestBody.id);
    expect(responseBody.title).toBe(requestBody.title);
    expect(responseBody.body).toBe(requestBody.body);
    expect(responseBody.userId).toBe(requestBody.userId);
  });
});

test('@api DELETE post', async ({ request }) => {
  await allure.epic('API');
  await allure.feature('Posts');
  await allure.story('Delete existing post');
  await allure.owner('Bohdan Yankevych');
  await allure.severity('critical');
  await allure.description(
    'Verify that an existing post can be deleted successfully.',
  );

  const response = await request.delete(
    'https://jsonplaceholder.typicode.com/posts/1',
  );

  await allure.step('Verify response status is 200', async () => {
    expect(response.status()).toBe(200);
  });
});