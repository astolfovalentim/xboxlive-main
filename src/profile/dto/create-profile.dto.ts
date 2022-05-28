import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

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
}
