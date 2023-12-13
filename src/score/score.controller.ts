import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ScoreService } from './score.service';
import { Score } from '@prisma/client';

@Controller('scores')
export class ScoreController {
  constructor(private readonly scoreService: ScoreService) {}

  @Post()
  async createScore(@Body() body: { userId: string; avatarId: string; time: Date; attempts: number; score: number }): Promise<Score> {
    return this.scoreService.createScore(body);
  }

  @Get()
  async getAllScores(): Promise<Score[]> {
    return this.scoreService.getAllScores();
  }

  @Get(':id')
  async getScoreById(@Param('id') id: string): Promise<Score | null> {
    return this.scoreService.getScoreById(id);
  }

  @Put(':id')
  async updateScore(@Param('id') id: string, @Body() body: { time?: Date; attempts?: number; score?: number }): Promise<Score> {
    return this.scoreService.updateScore(id, body);
  }

  @Delete(':id')
  async deleteScore(@Param('id') id: string): Promise<Score> {
    return this.scoreService.deleteScore(id);
  }
}
