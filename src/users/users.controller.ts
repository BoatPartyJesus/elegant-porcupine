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
    const users = this.userService.getUsers();
    return users;
  }
}
