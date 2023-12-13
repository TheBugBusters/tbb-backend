import { Controller, Get } from '@nestjs/common';
import { GamesService } from './games.service';

@Controller('games')
export class GamesController {
  constructor(private readonly appService: GamesService) {}

  @Get()
  getGames(): Promise<string> {
    return this.appService.getGames();
  }
}
