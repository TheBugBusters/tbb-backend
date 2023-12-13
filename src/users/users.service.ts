import { Injectable } from '@nestjs/common';
@Injectable()
export class UsersService {
  async getUser(): Promise<string> {
    return 'Get User';
  }
}
