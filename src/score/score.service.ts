import { Injectable } from '@nestjs/common';
@Injectable()
export class UsersService {
  async getUser(document: string): Promise<{ name: string; document: string }> {
    return {
      name: 'Douglas Prado',
      document,
    };
  }
}
