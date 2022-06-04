import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { FavoriteService } from './favorite.service';

@ApiTags('Favorite')
@Controller('favorite')
export class FavoriteController {
  constructor(private readonly favoriteService: FavoriteService) {}

  @Post()
  @ApiOperation({
    summary: 'Favoritar um jogo',
  })
  create(@Body() createFavoriteDto: CreateFavoriteDto) {
    return this.favoriteService.create(createFavoriteDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Lista de jogos favoritos',
  })
  findAll() {
    return this.favoriteService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Visualizar um jogo favorito pelo ID',
  })
  findOne(@Param('id') id: string) {
    return this.favoriteService.findOne(id);
  }
}
