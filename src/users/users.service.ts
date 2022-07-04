import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  private readonly usersRepository: UsersRepository;
  constructor(usersRepository: UsersRepository) {
    this.usersRepository = usersRepository;
  }

  getUsers() {
    const users = this.usersRepository.getUsers();
    // Connected to a Database source this would be done as part of the query.
    const orderedUsers = users.sort((a, b) => {
      const aFullName = `${a.firstName}#${a.lastName}`;
      const bFullName = `${b.firstName}#${b.lastName}`;
      return aFullName.localeCompare(bFullName, 'en', { sensitivity: 'base' });
    });

    return orderedUsers;
  }
}
