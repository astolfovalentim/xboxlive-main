import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID } from 'class-validator';

export class CreateFavoriteGameDto {
  @IsUUID()
  @ApiProperty({
    description: 'ID do jogo',
    example: 'efd0bc4b-86d8-4229-b0f9-7e83100d5ed0',
  })
  gameId: string;

  @IsString()
  @ApiProperty({
    description: 'Nome do jogo favorito',
    example: 'Halo Infinite',
  })
  title: string;

  @IsString()
  @ApiProperty({
    description: 'Descrição do jogo favorito',
    example:
      'A lendária série Halo está de volta com a campanha Master Chief mais ampla de todos os tempos e uma experiência multijogador gratuita e inovadora.',
  })
  description: string;
}
