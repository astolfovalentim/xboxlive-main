import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GameModule } from './game/game.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { ProfileModule } from './profile/profile.module';
import { GenreModule } from './genre/genre.module';

@Module({
  imports: [GameModule, PrismaModule, UserModule, ProfileModule, GenreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
