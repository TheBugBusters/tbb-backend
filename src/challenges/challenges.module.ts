import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ChallengesController } from './challenges.controller';
import { ChallengesService } from './challenges.service';
@Module({
  controllers: [ChallengesController],
  providers: [PrismaService, ChallengesService],
})
export class AppModule {}
