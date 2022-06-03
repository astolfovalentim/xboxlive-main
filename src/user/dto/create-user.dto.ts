import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @ApiProperty({
    description: 'O nome do usuário',
    example: 'Tony Stark',
  })
  name: string;

  @IsString()
  @ApiProperty({
    description: 'O e-mail do usuário',
    example: 'Tonystark@stark.com',
  })
  email: string;

  @IsString()
  @ApiProperty({
    description: 'A senha do usuário',
    example: '123456',
  })
  password: string;

  @IsString()
  @ApiProperty({
    description: 'O CPF do usuário',
    example: '123.456.789.10',
  })
  cpf: string;

  @IsBoolean()
  @ApiProperty({
    description: 'O usuário é administrador?',
    example: 'true',
  })
  isAdmin: boolean;
}
