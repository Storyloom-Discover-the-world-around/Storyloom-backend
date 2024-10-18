import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { StoryModule } from './story/story.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { PremiumContentModule } from './premium-content/premium-content.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGODB_URI),
    UserModule,
    StoryModule,
    AuthModule,
    PremiumContentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
