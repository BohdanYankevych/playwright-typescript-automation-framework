import * as allure from 'allure-js-commons';
import { ContentType } from 'allure-js-commons';

export async function attachJson(
  name: string,
  data: unknown,
): Promise<void> {
  await allure.attachment(
    name,
    JSON.stringify(data, null, 2),
    ContentType.JSON,
  );
}
