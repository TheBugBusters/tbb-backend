import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ChallengesController } from './challengesStage.controller';
import { ChallengesService } from './challengesStage.service';
@Module({
  controllers: [ChallengesController],
  providers: [PrismaService, ChallengesService],
})
export class AppModule {}
