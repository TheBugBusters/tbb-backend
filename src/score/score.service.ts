import { Injectable } from '@nestjs/common';
import { PrismaService } from './../prisma/prisma.service';
import { Score } from '@prisma/client';

@Injectable()
export class ScoreService {
  constructor(private prisma: PrismaService) {}

  async createScore(data: { userId: string; avatarId: string; time: Date; attempts: number; score: number }): Promise<Score> {
    return this.prisma.score.create({ data });
  }

  async getAllScores(): Promise<Score[]> {
    return this.prisma.score.findMany();
  }

  async getScoreById(id: string): Promise<Score | null> {
    return this.prisma.score.findUnique({ where: { id } });
  }

  async updateScore(id: string, data: { time?: Date; attempts?: number; score?: number }): Promise<Score> {
    return this.prisma.score.update({ where: { id }, data });
  }

  async deleteScore(id: string): Promise<Score> {
    return this.prisma.score.delete({ where: { id } });
  }
}
