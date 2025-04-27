import { ApiProperty } from '@nestjs/swagger';

export class Comments {
  @ApiProperty()
  content: string;

  @ApiProperty()
  postId: string;
}
