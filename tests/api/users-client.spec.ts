import { test, expect } from '@playwright/test';
import * as allure from 'allure-js-commons';
import { UsersApiClient } from '../../api/UsersApiClient';

test('@api GET users via API client', async ({ request }) => {
  await allure.epic('API');
  await allure.feature('Users');
  await allure.story('Get users via API client');
  await allure.owner('Bohdan Yankevych');
  await allure.severity('critical');
  await allure.description(
    'Verify that the API client returns a non-empty list of users.',
  );

  const usersApi = new UsersApiClient(request);

  const response = await usersApi.getUsers();

  await allure.step('Verify response status is 200', async () => {
    expect(response.status()).toBe(200);
  });

  const body = await response.json();

  await allure.step('Verify users list is not empty', async () => {
    expect(body.length).toBeGreaterThan(0);
  });
});

test('@api CREATE post via API client', async ({ request }) => {
  await allure.epic('API');
  await allure.feature('Posts');
  await allure.story('Create post via API client');
  await allure.owner('Bohdan Yankevych');
  await allure.severity('critical');
  await allure.description(
    'Verify that the API client can create a new post successfully.',
  );

  const usersApi = new UsersApiClient(request);

  const requestBody = {
    title: 'Playwright',
    body: 'API client test',
    userId: 1,
  };

  const response = await usersApi.createPost(requestBody);

  await allure.step('Verify response status is 201', async () => {
    expect(response.status()).toBe(201);
  });

  const body = await response.json();

  await allure.step('Verify created post title', async () => {
    expect(body.title).toBe(requestBody.title);
  });
});