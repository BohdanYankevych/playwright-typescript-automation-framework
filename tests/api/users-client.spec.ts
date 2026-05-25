import { test, expect } from '@playwright/test';
import { UsersApiClient } from '../../api/UsersApiClient';

test('@api GET users via API client', async ({ request }) => {
  const usersApi = new UsersApiClient(request);

  const response = await usersApi.getUsers();

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.length).toBeGreaterThan(0);
});

test('@api CREATE post via API client', async ({ request }) => {
  const usersApi = new UsersApiClient(request);

  const response = await usersApi.createPost({
    title: 'Playwright',
    body: 'API client test',
    userId: 1,
  });

  expect(response.status()).toBe(201);

  const body = await response.json();

  expect(body.title).toBe('Playwright');
});