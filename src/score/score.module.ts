import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UsersController } from './users.controller';
import { UsersService } from './score.service';
@Module({
  controllers: [UsersController],
  providers: [PrismaService, UsersService],
})
export class AppModule {}
