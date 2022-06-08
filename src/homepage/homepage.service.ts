import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class HomepageService {
  constructor(private readonly prisma: PrismaService) {}

  findOne(profileId: string) {
    const profile = this.prisma.profile.findUnique({
      where: { id: profileId },
      select: {
        game: true,
      },
    });
    return profile;
  }
}
