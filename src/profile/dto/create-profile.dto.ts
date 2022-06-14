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



  @IsUUID(undefined, { each: true })
  @ApiProperty({
    description: 'Lista de jogos favoritos',
    example:
      '["4e221610-f5a1-49ba-a169-b41aae4bb7f3","9c1cce7e-a309-481a-8d32-2b07840e0b8b"]',
  })
  game: string[];
}
