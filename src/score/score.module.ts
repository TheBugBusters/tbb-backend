import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ScoreController } from './score.controller';
import { ScoreService } from './score.service';
@Module({
  controllers: [ScoreController],
  providers: [PrismaService, ScoreService],
})
export class AppModule {}
