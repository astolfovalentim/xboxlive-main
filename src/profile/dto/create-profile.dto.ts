import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID } from 'class-validator';

export class CreateProfileDto {
  @IsString()
  @ApiProperty({
    description: 'O perfil do usuário',
    example: 'IronMan',
  })
  title: string;

  @IsString()
  @ApiProperty({
    description: 'A imagem do perfil do usuário',
    example:
      'https://static.wikia.nocookie.net/fanwork-marvelcinematicuniverse/images/c/c9/IronMan-Endgame.jpg/revision/latest?cb=20191108140046&path-prefix=pt',
  })
  imageURL: string;

  @IsUUID()
  @ApiProperty({
    description: 'ID do usuário que está criando o perfil',
    example: 'de45a5c7-979f-46e0-80cc-dc1ce7ea19bb',
  })
  userId: string;

  @IsUUID(undefined, { each: true })
  @ApiProperty({
    description: 'Lista de jogos favoritos',
    example:
      '["efd0bc4b-86d8-4229-b0f9-7e83100d5ed0","16547e6e-d8e9-4b85-9d88-b1ee32e1b83e"]',
  })
  game: string[];
}
