import {
  Body,
  Controller,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, LoginUserDto } from './dto/user.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/roles.decorator';
import { Role } from 'src/auth/role.enum';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Post('login')
  async login(@Body() loginUserDto: LoginUserDto) {
    return this.userService.login(loginUserDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin)
  @Post('admin')
  async accessAdmin() {
    return { message: 'Admin access granted' };
  }

  @UseGuards(JwtAuthGuard)
  @Put(':userId/like/:storyId')
  async likeStory(
    @Param('userId') userId: string,
    @Param('storyId') storyId: string,
    @Req() req: any,
  ) {
    const currentUser = req.user.userId;
    if (currentUser !== userId) {
      throw new Error('You can only modify your own liked stories');
    }
    return this.userService.likeStory(userId, storyId);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':userId/remove-like/:storyId')
  async removeLikedStory(
    @Param('userId') userId: string,
    @Param('storyId') storyId: string,
    @Req() req: any,
  ) {
    const currentUser = req.user.userId;
    if (currentUser !== userId) {
      throw new Error('You can only modify your own liked stories');
    }
    return this.userService.removeLikedStory(userId, storyId);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':userId/save/:storyId')
  async saveStory(
    @Param('userId') userId: string,
    @Param('storyId') storyId: string,
    @Req() req: any,
  ) {
    const currentUser = req.user.userId;
    if (currentUser !== userId) {
      throw new Error('You can only modify your own saved stories');
    }
    return this.userService.saveStory(userId, storyId);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':userId/remove-save/:storyId')
  async removeSavedStory(
    @Param('userId') userId: string,
    @Param('storyId') storyId: string,
    @Req() req: any,
  ) {
    const currentUser = req.user.userId;
    if (currentUser !== userId) {
      throw new Error('You can only modify your own saved stories');
    }
    return this.userService.removeSavedStory(userId, storyId);
  }
}
