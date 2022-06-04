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
    description: 'ID do usuário que está criando o pedido',
    example: 'de45a5c7-979f-46e0-80cc-dc1ce7ea19bb',
  })
  userId: string;
}
