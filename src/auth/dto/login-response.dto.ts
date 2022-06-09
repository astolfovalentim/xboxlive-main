import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/user/entities/user.entity';

export class LoginResponseDto {
  @ApiProperty({
    description: 'JWT gerado pelo login',
    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJydWNlQHdheW5lLmNvbSIsImlhdCI6MTY1NDgxMjIxNSwiZXhwIjoxNjU0ODk4NjE1fQ.l1L4Jrk8H2B40h50xveqYfOeJABnw3EaxduHaUCkF9k',
  })
  token: string;

  @ApiProperty({
    description: 'Dados do usuário autenticado',
  })
  user: User;
}
