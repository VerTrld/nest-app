import { ApiProperty } from '@nestjs/swagger';

export class Auth {
  @ApiProperty()
  email: string;

  @ApiProperty()
  hash: string;
}
