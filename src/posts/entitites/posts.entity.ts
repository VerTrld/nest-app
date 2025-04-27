import { ApiProperty } from '@nestjs/swagger';

export class Posts {
  @ApiProperty()
  title: string;

  @ApiProperty()
  content: string;

  @ApiProperty()
  personId: string;
}
