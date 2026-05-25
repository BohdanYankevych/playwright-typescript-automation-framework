import { test, expect } from '@playwright/test';

test('GET users list', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/users');

  expect(response.status()).toBe(200);

  const responseBody = await response.json();

  expect(responseBody.length).toBeGreaterThan(0);
  expect(responseBody[0]).toHaveProperty('id');
  expect(responseBody[0]).toHaveProperty('email');
  expect(responseBody[0]).toHaveProperty('name');
});

test('POST create new post', async ({ request }) => {
  const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
    data: {
      title: 'QA Automation',
      body: 'Playwright API test',
      userId: 1,
    },
  });

  expect(response.status()).toBe(201);

  const responseBody = await response.json();

  expect(responseBody).toHaveProperty('id');
  expect(responseBody.title).toBe('QA Automation');
  expect(responseBody.body).toBe('Playwright API test');
  expect(responseBody.userId).toBe(1);
});

test('PUT update post', async ({ request }) => {
  const response = await request.put(
    'https://jsonplaceholder.typicode.com/posts/1',
    {
      data: {
        id: 1,
        title: 'Updated Title',
        body: 'Updated body content',
        userId: 1,
      },
    }
  );

  expect(response.status()).toBe(200);

  const responseBody = await response.json();

  expect(responseBody.id).toBe(1);
  expect(responseBody.title).toBe('Updated Title');
  expect(responseBody.body).toBe('Updated body content');
});

test('DELETE post', async ({ request }) => {
  const response = await request.delete(
    'https://jsonplaceholder.typicode.com/posts/1'
  );

  expect(response.status()).toBe(200);
});