import { PickType } from '@nestjs/swagger';
import { Posts } from '../entitites/posts.entity';

export class CreatePostsDto extends PickType(Posts, [
  // 'id',
  'title',
  'content',
  'personId',
  'type',
]) {}
