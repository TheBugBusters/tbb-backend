import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ChallengeStage } from '@prisma/client';

@Injectable()
export class ChallengeStageService {
  constructor(private prisma: PrismaService) {}

  async createChallengeStage(data: { challengeId: string; stageId: string }): Promise<ChallengeStage> {
    return this.prisma.challengeStage.create({ data });
  }

  async getAllChallengeStages(): Promise<ChallengeStage[]> {
    return this.prisma.challengeStage.findMany();
  }

  async getChallengeStageById(id: string): Promise<ChallengeStage | null> {
    return this.prisma.challengeStage.findUnique({ where: { id } });
  }

  async updateChallengeStage(id: string, data: { challengeId?: string; stageId?: string }): Promise<ChallengeStage> {
    return this.prisma.challengeStage.update({ where: { id }, data });
  }

  async deleteChallengeStage(id: string): Promise<ChallengeStage> {
    return this.prisma.challengeStage.delete({ where: { id } });
  }
}
