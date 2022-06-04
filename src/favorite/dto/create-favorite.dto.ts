import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsString, ValidateNested } from 'class-validator';
import { CreateFavoriteGameDto } from './create-favorite-game.dto';

export class CreateFavoriteDto {
  @ApiProperty({
    description: 'Id do usuário está favoritando o jogo',
    example: 'de45a5c7-979f-46e0-80cc-dc1ce7ea19bb',
  })
  userId: string;

  @IsString()
  @ApiProperty({
    description: 'Nome do perfil do usuário que está favoritando o jogo',
    example: 'IronMan',
  })
  profileTitle: string;

  @ValidateNested({
    each: true,
  })
  @Type(() => CreateFavoriteGameDto)
  @ApiProperty({
    description: 'Lista com os IDs dos jogos favoritos',
    type: [CreateFavoriteGameDto],
  })
  game: CreateFavoriteGameDto[];
}
