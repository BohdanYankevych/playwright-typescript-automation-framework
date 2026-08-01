import { faker } from '@faker-js/faker';
import { Customer } from '../models/Customer';

export class CustomerFactory {
  static default(): Customer {
    return {
      firstName: 'John',
      lastName: 'Doe',
      postalCode: '10001',
    };
  }

  static random(): Customer {
    return {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      postalCode: faker.location.zipCode(),
    };
  }
}