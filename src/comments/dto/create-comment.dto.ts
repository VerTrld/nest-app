import { PickType } from '@nestjs/swagger';
import { Comments } from '../entities/comment.entity';

export class CreateCommentDto extends PickType(Comments, [
  'content',
  'postId',
]) {}
