import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'src/utils/handle-error.util';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { Game } from './entities/game.entity';

@Injectable()
export class GameService {
  constructor(private readonly prisma: PrismaService) {}

  create(createGameDto: CreateGameDto) {
    const data: Prisma.GameCreateInput = {
      ...createGameDto,
      genre: {
        connect: createGameDto.genre.map((genreId) => ({
          id: genreId,
        })),
      },
    };

    return this.prisma.game
      .create({
        data,
        select: {
          id: true,
          title: true,
          coverImageUrl: true,
          description: true,
          gameplayYouTubeUrl: true,
          trailerYouTubeUrl: true,
          year: true,
          imdbScore: true,
          genre: {
            select: {
              name: true,
            },
          },
        },
      })
      .catch(handleError);
  }

  findAll() {
    return this.prisma.game.findMany();
  }

  async findById(id: string): Promise<Game> {
    const record = await this.prisma.game.findUnique({ where: { id } });

    if (!record) {
      throw new NotFoundException(`Registro com o ID '${id}' não encontrado`);
    }

    return record;
  }

  async findOne(id: string) {
    return this.findById(id);
  }

  async update(id: string, dto: UpdateGameDto): Promise<Game> {
    await this.findById(id);

    const data: Prisma.GameUpdateInput = {
      ...dto,
      genre: {
        connect: dto.genre.map((genreId) => ({
          id: genreId,
        })),
      },
    };
    return this.prisma.game
      .update({
        where: { id },
        data,
        include: {
          genre: {
            select: {
              name: true,
            },
          },
        },
      })
      .catch(handleError);
  }

  async delete(id: string) {
    await this.findById(id);
    await this.prisma.game.delete({ where: { id } });
  }
}
