import { APIRequestContext } from '@playwright/test';
import { BaseApiClient } from './BaseApiClient';

export class UsersApiClient extends BaseApiClient {
  constructor(request: APIRequestContext) {
    super(request);
  }

  async getUsers() {
    return this.get(
      'https://jsonplaceholder.typicode.com/users',
    );
  }

  async createPost(data: object) {
    return this.post(
      'https://jsonplaceholder.typicode.com/posts',
      data,
    );
  }

  async updatePost(id: number, data: object) {
    return this.put(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      data,
    );
  }

  async deletePost(id: number) {
    return this.delete(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
    );
  }
}