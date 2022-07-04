import { Test } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersRepository } from './users.repository';
import { UsersService } from './users.service';

describe('UserController', () => {
  let userController: UsersController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService, UsersRepository],
    }).compile();

    userController = moduleRef.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(userController).toBeDefined();
  });
});
