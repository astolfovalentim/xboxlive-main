import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, IsUUID, Max, Min } from 'class-validator';

export class CreateGameDto {
  @IsString()
  @ApiProperty({
    description: 'O título do jogo',
    example: 'Halo Infinite',
  })
  title: string;

  @IsString()
  @ApiProperty({
    description: 'A imagem do jogo',
    example:
      'https://compass-ssl.xbox.com/assets/9c/94/9c944d9c-7ef1-4b46-9f68-9b02966d3993.jpg?n=Halo-Infinite_GLP-Page-Hero-0_1083x609.jpg',
  })
  coverImageUrl: string;

  @IsString()
  @ApiProperty({
    description: 'A descrição do jogo',
    example:
      'A lendária série Halo está de volta com a campanha Master Chief mais ampla de todos os tempos e uma experiência multijogador gratuita e inovadora.',
  })
  description: string;

  @IsInt()
  @ApiProperty({
    description: 'O ano de lançamento do jogo',
    example: '2021',
  })
  year: number;

  @IsInt()
  @ApiProperty({
    description: 'Nota do jogo no IMDB',
    example: '5',
  })
  @Min(0)
  @Max(5)
  imdbScore: number;

  @IsString()
  @ApiProperty({
    description: 'O trailer do jogo',
    example: 'https://www.youtube.com/watch?v=PyMlV5_HRWk',
  })
  trailerYouTubeUrl: string;

  @IsString()
  @ApiProperty({
    description: 'A gameplay do jogo',
    example: 'https://www.youtube.com/watch?v=SISarwWpQV8',
  })
  gameplayYouTubeUrl: string;

  @IsUUID(undefined, { each: true })
  @ApiProperty({
    description: 'O id do gênero do jogo',
    example:
      '["205fa77d-9959-4fba-b6a9-ace085c92ff0", "6cae9057-38a5-4f6e-a436-3cfcd6524352"]',
  })
  genre: string[];
}

// criar campo no genero id e na entidade
