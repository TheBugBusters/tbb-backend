import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ChallengesService } from './challenges.service';

@Controller('challenges')
export class ChallengesController {
  constructor(private readonly appService: ChallengesService) {}

  @Get()
  getChallenge(
    @Query('gameId') gameId: string,
    @Query('stageId') stageId: string,
  ): Promise<any> {
    return this.appService.getChallenge(gameId, stageId);
  }

  @Post(':challengeId')
  postChallengeResponse(
    @Param('challengeId') challengeId: string,
  ): Promise<any> {
    return this.appService.postChallengeResponse(challengeId);
  }
}
