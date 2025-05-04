import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreatePostsDto } from './dto/createPosts.dto';
import { find } from 'rxjs';

@Injectable()
export class PostsService {
  constructor(private prismaClient: PrismaClient) {}

  // async create(createPersonDto: CreatePersonDto) {
  //   const createPerson = await this.prismaClient.person.create({
  //     data: createPersonDto,
  //   });

  async create(createPostsDto: CreatePostsDto) {
    const createPosts = await this.prismaClient.posts.create({
      data: createPostsDto,
    });

    return createPosts;
  }

  async findByOwner(personId) {
    return this.prismaClient.posts.findMany({
      where: {
        personId,
      },
      include: {
        owner: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });
  }

  async findOne(id: string) {
    console.log({ id: id });
    const findOne = await this.prismaClient.posts.findUnique({
      where: { id },
      include: {
        owner: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });

    return findOne;
  }

  async findAll() {
    const posts = await this.prismaClient.posts.findMany({
      include: {
        _count: {
          select: {
            comments: true,
          },
        },
        owner: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });

    return posts;
  }

  async remove(id: string) {
    await this.prismaClient.comments.deleteMany({
      where: {
        postId: id,
      },
    });
    const deletePost = await this.prismaClient.posts.delete({
      where: { id },
    });

    return deletePost;
  }
}
