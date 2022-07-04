import { Injectable } from '@nestjs/common';
import { UserData } from './user.interface';

@Injectable()
export class UsersRepository {
  // I have moved this data out of the service layer into the repository/data access layer to better emulate
  // a real-world application. Allowing for business logic to be moved into the service layer keeping the controller "thin"
  // this will allow for easier testing and less mocking.
  getUsers(): UserData[] {
    return [
      {
        id: 1,
        firstName: 'Oliver',
        lastName: 'Gartland',
      },
      {
        id: 2,
        firstName: 'Anna',
        lastName: 'Watts',
      },
      {
        id: 3,
        firstName: 'Andy',
        lastName: 'Brown',
      },
      {
        id: 4,
        firstName: 'Maisie',
        lastName: 'Curtis',
      },
      {
        id: 5,
        firstName: 'Jonathan',
        lastName: 'Curtis',
      },
      {
        id: 6,
        firstName: 'Jonathan',
        lastName: 'Wright',
      },
      {
        id: 7,
        firstName: 'Jennifer',
        lastName: 'Tomkinson',
      },
      {
        id: 8,
        firstName: 'Rich',
        lastName: 'Richman',
      },
    ];
  }
}
