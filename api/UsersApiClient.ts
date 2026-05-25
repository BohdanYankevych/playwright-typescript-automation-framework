import { APIRequestContext } from '@playwright/test';

export class UsersApiClient {
  constructor(private request: APIRequestContext) {}

  async getUsers() {
    return await this.request.get(
      'https://jsonplaceholder.typicode.com/users',
    );
  }

  async createPost(data: object) {
    return await this.request.post(
      'https://jsonplaceholder.typicode.com/posts',
      { data },
    );
  }

  async updatePost(id: number, data: object) {
    return await this.request.put(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      { data },
    );
  }

  async deletePost(id: number) {
    return await this.request.delete(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
    );
  }
}