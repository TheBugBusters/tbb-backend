import { Injectable } from '@nestjs/common';
@Injectable()
export class GamesService {
  async getGames(): Promise<string> {
    return 'Get Games';
  }
}
