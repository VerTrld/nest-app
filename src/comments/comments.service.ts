import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class CommentsService {
  constructor(private prismaClient: PrismaClient) {}

  async create(createCommentDto: CreateCommentDto) {
    const createComment = await this.prismaClient.comments.create({
      data: createCommentDto,
    });
    return createComment;
  }

  async findAll() {
    const data = await this.prismaClient.comments.findMany({
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
    return data;
  }
  // async findAll() {
  //   const posts = await this.prismaClient.posts.findMany({
  //     include: {
  //       owner: {
  //         select: {
  //           id: true,
  //           name: true,
  //           email: true,
  //         },
  //       },
  //     },
  //   });
  //   return posts;
  // }

  findOne(id: number) {
    return `This action returns a #${id} comment`;
  }

  update(id: number, updateCommentDto: UpdateCommentDto) {
    return `This action updates a #${id} comment`;
  }

  remove(id: number) {
    return `This action removes a #${id} comment`;
  }
}
