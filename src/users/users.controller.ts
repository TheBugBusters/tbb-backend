import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly appService: UsersService) {}

  @Get(':document')
  getUser(
    @Param('document') document: string,
  ): Promise<{ name: string; document: string }> {
    return this.appService.getUser(document);
  }
}
