import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('/users')
export class UsersController {
  private readonly userService: UsersService;
  constructor(userService: UsersService) {
    this.userService = userService;
  }

  @Get()
  @ApiOperation({ summary: 'Get all Users' })
  @ApiResponse({ status: 200, description: 'Return all users' })
  getAll() {
    // If the service was connecting to a database or other service this controller endpoint and subsequent calls
    // would implement async/await pattern to allow for the processing of other requests instead of locking the thread.
    const users = this.userService.getUsers();

    // Given an application where sensitive data may be contained in the object
    // I would return a DTO here instead of the full UserData object.
    return users;
  }
}
