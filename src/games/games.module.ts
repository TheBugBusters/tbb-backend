import { Module } from '@nestjs/common';
import { PrismaService } from './../prisma/prisma.service';
import { GamesController } from './games.controller';
import { GamesService } from './games.service';
@Module({
  controllers: [GamesController],
  providers: [PrismaService, GamesService],
})
export class AppModule {}
