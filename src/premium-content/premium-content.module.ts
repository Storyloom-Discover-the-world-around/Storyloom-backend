import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { PremiumContentController } from './premium-content.controller';

@Module({
  imports: [UserModule],
  controllers: [PremiumContentController],
})
export class PremiumContentModule {}
