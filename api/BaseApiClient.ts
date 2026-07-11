import { APIRequestContext, APIResponse } from '@playwright/test';

export class BaseApiClient {
  constructor(protected request: APIRequestContext) {}

  protected async get(url: string): Promise<APIResponse> {
    return await this.request.get(url);
  }

  protected async post(
    url: string,
    data: object,
  ): Promise<APIResponse> {
    return await this.request.post(url, { data });
  }

  protected async put(
    url: string,
    data: object,
  ): Promise<APIResponse> {
    return await this.request.put(url, { data });
  }

  protected async delete(url: string): Promise<APIResponse> {
    return await this.request.delete(url);
  }
}