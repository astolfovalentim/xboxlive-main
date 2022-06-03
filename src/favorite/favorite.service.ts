import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'src/utils/handle-error.util';
import { CreateFavoriteDto } from './dto/create-favorite.dto';

@Injectable()
export class FavoriteService {
  constructor(private readonly prisma: PrismaService) {}

  create(createFavoriteDto: CreateFavoriteDto) {
    const data: Prisma.FavoriteCreateInput = {
      user: {
        connect: {
          id: createFavoriteDto.userId,
        },
      },
      profile: {
        connect: {
          title: createFavoriteDto.profileTitle,
        },
      },
      game: {
        connect: createFavoriteDto.game.map((game) => ({ id: game })),
      },
    };

    this.prisma.favorite.create({ data }).catch(handleError);
  }

  findAll() {
    return `This action returns all favorite`;
  }

  findOne(id: string) {
    return `This action returns a #${id} favorite`;
  }
}
