import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { CommonModule } from '../common/common.module';
import { UploadController } from './upload.controller';

@Module({
  imports: [UserModule, CommonModule],
  controllers: [AuthController, UploadController],
})
export class AuthModule {}
