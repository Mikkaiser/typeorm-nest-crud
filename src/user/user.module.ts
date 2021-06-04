import { Module } from '@nestjs/common';
import { UserController } from './controller/controller.controller';
import { UserProvider } from './provider/provider';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './models/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [UserProvider],
})
export class UserModule {}
