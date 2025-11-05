import { Module } from '@nestjs/common';

import { UsersService } from './services/users.service';
import { UsersAdminService } from './services/users-admin.service';
import { UsersController } from './users.controller';
import { UsersAdminController } from './users-admin.controller';

@Module({
  controllers: [UsersController, UsersAdminController],
  providers: [UsersService, UsersAdminService],
  exports: [UsersService],
})
export class UsersModule {}
