import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { UserService } from 'src/user/user.service';

@Controller('premium')
export class PremiumContentController {
  constructor(private userService: UserService) {}

  @Get()
  getStories(): string {
    return 'Hello User';
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async getPremiumContent(@Req() req: any) {
    const hasAccess = await this.userService.verifySubscription(
      req.user.userId,
    );
    if (!hasAccess) {
      return { message: 'Upgrade to premium to access this content' };
    }

    return { message: 'Welcome to premium content!' };
  }
}
