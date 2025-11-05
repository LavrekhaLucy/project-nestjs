import { Body, Controller, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { UsersAdminService } from './services/users-admin.service';

@ApiBearerAuth()
@ApiTags('Users-Admin')
@Controller('users-admin')
export class UsersAdminController {
  constructor(private readonly usersService: UsersAdminService) {}

  @Post('ban')
  ban(@Body() dto: { id: string }) {
    return this.usersService.ban(dto.id);
  }
}
