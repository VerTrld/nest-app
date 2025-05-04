import { ApiProperty } from '@nestjs/swagger';
import { PostType } from '@prisma/client';

export class Posts {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  content: string;

  @ApiProperty()
  personId: string;

  @ApiProperty({ enum: PostType })
  type?: PostType;
}
