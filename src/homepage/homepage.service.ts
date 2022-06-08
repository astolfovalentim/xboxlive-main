import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class HomepageService {
  constructor(private readonly prisma: PrismaService) {}

  async findOne(profileId: string) {
    const favorites = await this.prisma.profile.findUnique({
      where: { id: profileId },
      select: {
        game: true,
      },
    });
    const genres = await this.prisma.genre.findMany({
      select: { name: true, id: true, game: { select: { title: true } } },
    });
    return [favorites, genres];
  }
}
