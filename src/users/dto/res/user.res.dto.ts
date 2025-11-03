import { ApiProperty } from '@nestjs/swagger';

export class UserResDto {
  @ApiProperty({ example: 1, description: 'id of the user' })
  readonly id: number;
  @ApiProperty({ example: 'Lucy', description: 'User first name' })
  readonly name: string;
  readonly age?: number;
  readonly email: string;
  readonly password: string;
}
