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
        createMany: {
          data: createFavoriteDto.game.map((createFavoriteGameDto) => ({
            gameId: createFavoriteGameDto.gameId,
            title: createFavoriteGameDto.title,
            description: createFavoriteGameDto.description,
          })),
        },
      },
    };

    return this.prisma.favorite
      .create({
        data,
        select: {
          id: true,
          profile: {
            select: {
              title: true,
            },
          },
          user: {
            select: {
              name: true,
            },
          },
          game: {
            select: {
              game: {
                select: {
                  title: true,
                },
              },
            },
          },
        },
      })
      .catch(handleError);
  }

  findAll() {
    return this.prisma.favorite.findMany({
      select: {
        id: true,
        profile: {
          select: {
            title: true,
          },
        },
        user: {
          select: {
            name: true,
          },
        },
        _count: {
          select: {
            game: true,
          },
        },
      },
    });
  }

  findOne(id: string) {
    return this.prisma.favorite.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            name: true,
          },
        },
        profile: {
          select: {
            title: true,
          },
        },
        game: {
          select: {
            game: {
              select: {
                id: true,
                title: true,
                year: true,
                coverImageUrl: true,
                description: true,
              },
            },
          },
        },
      },
    });
  }
}
