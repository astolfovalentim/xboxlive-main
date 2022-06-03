import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID } from 'class-validator';

export class CreateFavoriteDto {
  @ApiProperty({
    description: 'Id do usuário está favoritando o jogo',
    example: 'e1bc0c89-a319-44df-a6e9-db66fe7b956b',
  })
  userId: string;

  @IsString()
  @ApiProperty({
    description: 'Nome do perfil do usuário que está favoritando o jogo',
    example: 'IronMan',
  })
  profileTitle: string;

  @IsUUID(undefined, { each: true })
  @ApiProperty({
    description: 'Lista com os IDs dos jogos favoritos',
    example:
      '["04f66779-bcfa-4c5c-a140-f234138890f3", "adb96fd7-cdcf-43dc-9e1b-0c0a262111f9"]',
  })
  game: string[];
}
