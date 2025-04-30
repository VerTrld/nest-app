import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostsDto } from './dto/createPosts.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post('/create')
  create(@Body() createPostsDto: CreatePostsDto) {
    return this.postsService.create(createPostsDto);
  }

  @Get('owner/:ownerPersonId')
  findByOwner(@Param('ownerPersonId') personId: string) {
    return this.postsService.findByOwner(personId);
  }

  @Get('one/:postId') 
  findOne(@Param('postId') id: string) {
    return this.postsService.findOne(id)

  }

  @Get('all')
  findAll() {
    return this.postsService.findAll();
  }
  

    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.postsService.remove(id);
    }
}
