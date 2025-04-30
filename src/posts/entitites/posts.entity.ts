import { ApiProperty } from '@nestjs/swagger';

export class Posts {

  @ApiProperty()
  id:string;
  
  @ApiProperty()
  title: string;

  @ApiProperty()
  content: string;

  @ApiProperty()
  personId: string;
}
