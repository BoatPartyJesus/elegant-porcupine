import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { UsersModule } from '../../src/users/users.module';
import { UserData } from '../../src/users/user.interface';
import { UsersRepository } from '../../src/users/users.repository';

describe('Users API', () => {
  let app: INestApplication;
  const repository = {
    getUsers: (): UserData[] => [
      {
        id: 1,
        firstName: 'Chuck',
        lastName: 'Norris',
      },
      {
        id: 2,
        firstName: 'Alfred',
        lastName: 'Longbottom',
      },
    ],
  };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [UsersModule],
    })
      .overrideProvider(UsersRepository)
      .useValue(repository)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/GET users returns array of users`, () => {
    return request(app.getHttpServer())
      .get('/users')
      .expect(200)
      .expect(repository.getUsers().reverse()); // Final response should be in alphabetical order.
  });

  afterAll(async () => {
    await app.close();
  });
});
