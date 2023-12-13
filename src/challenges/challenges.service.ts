import { Injectable } from '@nestjs/common';
import response from './response';

@Injectable()
export class ChallengesService {
  async getChallenge(gameId: string, stageId: string): Promise<any> {
    return {
      ...response,
      gameId,
      stageId,
    };
  }

  async postChallengeResponse(
    challengeId: string,
    response: string,
  ): Promise<any> {
    return challengeId && response ? true : false;
  }
}
