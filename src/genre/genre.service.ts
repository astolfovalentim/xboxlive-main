import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'src/utils/handle-error.util';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { Genre } from './entities/genre.entity';

@Injectable()
export class GenreService {
  constructor(private readonly prisma: PrismaService) {}

  create(createGenreDto: CreateGenreDto) {
    const data: Genre = { ...createGenreDto };

    return this.prisma.genre.create({ data }).catch(handleError);
  }

  findAll() {
    return this.prisma.genre.findMany();
  }

  async findById(id: string): Promise<Genre> {
    const record = await this.prisma.genre.findUnique({ where: { id } });

    if (!record) {
      throw new NotFoundException(`Registro com o ID '${id}' não encontrado`);
    }

    return record;
  }

  async findOne(id: string) {
    return this.findById(id);
  }

  async update(id: string, dto: UpdateGenreDto): Promise<Genre> {
    await this.findById(id);

    const data: Partial<Genre> = { ...dto };
    return this.prisma.genre
      .update({
        where: { id },
        data,
      })
      .catch(handleError);
  }
  async delete(id: string) {
    await this.findById(id);
    await this.prisma.genre.delete({ where: { id } });
  }
}
