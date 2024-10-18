import { Module } from '@nestjs/common';
import { PremiumContentController } from './premium-content.controller';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [UserModule],
  controllers: [PremiumContentController],
})
export class PremiumContentModule {}
