import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class HomepageService {
  constructor(private readonly prisma: PrismaService) {}

  findOne(profileId: string) {
    const favorites = this.prisma.profile.findUnique({
      where: { id: profileId },
      select: {
        game: true,
      },
    });
    const genres = this.prisma.genre.findMany({
      select: { name: true, id: true, game: { select: { title: true } } },
    });
    const favoritesGenres = [{favoritos: favorites}, {generos: genres}]
    return favoritesGenres;
  }
}
