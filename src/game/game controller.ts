import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateGameDto } from './dto/create-game.dto';
import { GameService } from './game.service';

@ApiTags('games')
@Controller('game')
export classGameController {
constructor(private gameService: GameService) {}

  @Get()
  findAll() {
    return this.gamerService.findAll();
  }

  @Post()
  create(@Body() createGameDto: CreateGameDto ) {
    return this.gameService.create(createGameDto);
  }
}
