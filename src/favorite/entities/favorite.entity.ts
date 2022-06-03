import { Game, Profile, User } from '@prisma/client';

export class Favorite {
  id?: string;
  user?: User;
  profile?: Profile;
  createdAt?: Date;
  updatedAt?: Date;
  game?: Game[];
}
