import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersAdminService {
  ban(id: string) {
    console.log(`User ${id} banned`);
    return { message: `User ${id} banned` };
  }
}
