import { Test, TestingModule } from '@nestjs/testing';
import { UserData } from './user.interface';
import { UsersRepository } from './users.repository';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;
  let repository: UsersRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService, UsersRepository],
    }).compile();

    service = module.get<UsersService>(UsersService);
    repository = module.get<UsersRepository>(UsersRepository);
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
        .spyOn(repository, 'getUsers')
        .mockImplementation(() => expectedResult);

      const result = service.getUsers();

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

      const repositoryResponse: UserData[] = [
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
        .spyOn(repository, 'getUsers')
        .mockImplementation(() => repositoryResponse);

      const actualResult = service.getUsers();

      expect(actualResult).toStrictEqual(expectedResult);
    });

    it('should be defined', () => {
      expect(service).toBeDefined();
    });
  });
});
