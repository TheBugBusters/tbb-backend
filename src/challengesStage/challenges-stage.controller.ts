import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ChallengeStageService } from './challenges-stage.service';
import { ChallengeStage } from '@prisma/client';

@Controller('challenge-stages')
export class ChallengeStageController {
  constructor(private readonly challengeStageService: ChallengeStageService) {}

  @Post()
  async createChallengeStage(@Body() body: { challengeId: string; stageId: string }): Promise<ChallengeStage> {
    return this.challengeStageService.createChallengeStage(body);
  }

  @Get()
  async getAllChallengeStages(): Promise<ChallengeStage[]> {
    return this.challengeStageService.getAllChallengeStages();
  }

  @Get(':id')
  async getChallengeStageById(@Param('id') id: string): Promise<ChallengeStage | null> {
    return this.challengeStageService.getChallengeStageById(id);
  }

  @Put(':id')
  async updateChallengeStage(@Param('id') id: string, @Body() body: { challengeId?: string; stageId?: string }): Promise<ChallengeStage> {
    return this.challengeStageService.updateChallengeStage(id, body);
  }

  @Delete(':id')
  async deleteChallengeStage(@Param('id') id: string): Promise<ChallengeStage> {
    return this.challengeStageService.deleteChallengeStage(id);
  }
}
