import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'src/utils/handle-error.util';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Profile } from './entities/profile.entity';

@Injectable()
export class ProfileService {
  constructor(private readonly prisma: PrismaService) {}

  create(createProfileDto: CreateProfileDto, userid: string) {
    const data: Prisma.ProfileCreateInput = {
      user: {
        connect: {
          id: userid,
        },
      },
      title: createProfileDto.title,
      imageURL: createProfileDto.imageURL,
      game: {
        connect: createProfileDto.game.map((gameId) => ({
          id: gameId,
        })),
      },
    };
    return this.prisma.profile
      .create({
        data,
        select: {
          id: true,
          title: true,
          imageURL: true,
          user: { select: { id: true, name: true } },
       game: {select: {id: true, title: true, coverImageUrl: true, genre: { select: {name: true}}}}

        },
      })
      .catch(handleError);
  }

  async findAll(userid: string) {
    const profile = await this.prisma.user.findUnique({
      where: {id: userid}, select: {profile: true}
    })
    if (profile.profile.length == 0) {
      throw new NotFoundException('Nenhum perfil encontrado')

    }
    return profile
  }

  async findById(id: string): Promise<Profile> {
    const record = await this.prisma.profile.findUnique({ where: { id } });

    if (!record) {
      throw new NotFoundException(`Registro com o ID '${id}' não encontrado`);
    }

    return record;
  }

  async findOne(id: string, userid: string) {
    return this.findById(id);
  }

  async update(id: string, dto: UpdateProfileDto, userid: string): Promise<Profile> {
    await this.findById(id);
    const data: Partial<Profile> = { ...dto };
    return this.prisma.profile
      .update({
        where: { id },
        data,
      })
      .catch(handleError);
  }

  async delete(id: string, userid: string) {
    await this.findById(id);
    await this.prisma.profile.delete({ where: { id } });
  }
}
