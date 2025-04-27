import { ApiProperty } from '@nestjs/swagger';

export class Person {
  @ApiProperty()
  name: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  hash: string;
}
