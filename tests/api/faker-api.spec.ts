import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test('POST request with random Faker data', async ({ request }) => {

  const randomName = faker.person.fullName();
  const randomEmail = faker.internet.email();
  const randomJob = faker.person.jobTitle();

  const response = await request.post(
    'https://jsonplaceholder.typicode.com/posts',
    {
      data: {
        name: randomName,
        email: randomEmail,
        job: randomJob,
      },
    }
  );

  expect(response.status()).toBe(201);

  const responseBody = await response.json();

  expect(responseBody.name).toBe(randomName);
  expect(responseBody.email).toBe(randomEmail);
  expect(responseBody.job).toBe(randomJob);

  console.log(responseBody);

});