import { Module } from '@nestjs/common';

import { PersonModule } from './person/person.module';
import { PostsModule } from './posts/posts.module';
import { CommentsModule } from './comments/comments.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PersonModule, PostsModule, CommentsModule, AuthModule],
  // controllers: [AppController],
  // providers: [],
})
export class AppModule {}
