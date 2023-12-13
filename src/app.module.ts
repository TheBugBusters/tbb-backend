import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ChallengesController } from './challenges/challenges.controller';
import { ChallengesService } from './challenges/challenges.service';
import { GamesController } from './games/games.controller';
import { GamesService } from './games/games.service';
import { PrismaService } from './prisma/prisma.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [UsersController, GamesController, ChallengesController],
  providers: [PrismaService, UsersService, GamesService, ChallengesService],
})
export class AppModule {}
