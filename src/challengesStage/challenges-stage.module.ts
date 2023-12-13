import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ChallengeStageController } from './challenges-stage.controller';
import { ChallengeStageService } from './challenges-stage.service';

@Module({
  controllers: [ChallengeStageController],
  providers: [PrismaService, ChallengeStageService],
})
export class ChallengeStageModule {}
