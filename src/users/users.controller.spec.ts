import { Test } from '@nestjs/testing';
import { UserData } from './user.interface';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UserController', () => {
  let userController: UsersController;
  let userService: UsersService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    userController = moduleRef.get<UsersController>(UsersController);
    userService = moduleRef.get<UsersService>(UsersService);
  });

  describe('get', () => {
    it('should return a list of users', () => {
      const expectedResult: UserData[] = [
        {
          id: 1,
          firstName: 'Chuck',
          lastName: 'Norris',
        },
        {
          id: 2,
          firstName: 'Captain',
          lastName: 'Sisko',
        },
      ];

      jest
        .spyOn(userService, 'getUsers')
        .mockImplementation(() => expectedResult);

      const result = userController.getAll();

      expect(result).toStrictEqual(expectedResult);
    });

    it('should return a list of users in alphabetical order', () => {
      const expectedResult: UserData[] = [
        {
          id: 3,
          firstName: 'Jimbo',
          lastName: 'Jones',
        },
        {
          id: 1,
          firstName: 'Sideshow',
          lastName: 'Bob',
        },
        {
          id: 2,
          firstName: 'Sideshow',
          lastName: 'Mel',
        },
      ];

      const serviceResponse: UserData[] = [
        {
          id: 2,
          firstName: 'Sideshow',
          lastName: 'Mel',
        },
        {
          id: 3,
          firstName: 'Jimbo',
          lastName: 'Jones',
        },
        {
          id: 1,
          firstName: 'Sideshow',
          lastName: 'Bob',
        },
      ];

      jest
        .spyOn(userService, 'getUsers')
        .mockImplementation(() => serviceResponse);

      const actualResult = userController.getAll();

      expect(actualResult).toStrictEqual(expectedResult);
    });
  });
});
