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
    });
  }

  async findOne(id: string) {
    console.log({ id: id });
    const findOne = await this.prismaClient.posts.findUnique({
      where: { id },
    });

    return findOne;
  }

  async findAll() {
    const posts = await this.prismaClient.posts.findMany({
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
    return posts;
  }

  async remove(id: string) {
    const deletePerson = await this.prismaClient.posts.delete({
      where: { id },
    });

    return deletePerson;
  }
}
