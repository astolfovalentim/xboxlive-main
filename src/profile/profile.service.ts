import { Delete, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Profile } from './entities/profile.entity';

@Injectable()
export class ProfileService {
  constructor(private readonly prisma: PrismaService) {}

  create(createProfileDto: CreateProfileDto) {
    const data: Profile = { ...createProfileDto };

    return this.prisma.profile.create({ data });
  }

  findAll() {
    return this.prisma.profile.findMany();
  }

  async findOne(id: string) {
    const record = await this.prisma.profile.findUnique({ where: { id } });

    if (!record) {
      throw new NotFoundException(`Registro com o ID '${id}' não encontrado`);
    }

    return record;
  }

  update(id: string, dto: UpdateProfileDto): Promise<Profile> {
    const data: Partial<Profile> = { ...dto };
    return this.prisma.profile.update({
      where: { id },
      data,
    });

    // update(id: string, data: UpdateProfileDto): Promise<Profile> {
    //   return this.prisma.profile.update({
    //     where: { id },
    //     data: {
    //       ...data,
    //     },
    //   });
    // }
  }

  async delete(id: string) {
    await this.prisma.profile.delete({ where: { id } });
  }
}
