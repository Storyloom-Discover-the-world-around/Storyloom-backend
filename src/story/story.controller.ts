import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { StoryService } from './story.service';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CreateStoryDto } from './dto/create-story.dto/create-story.dto';
import { Story } from './schemas/story.schema';
import { UpdateStoryDto } from './dto/update-story.dto/update-story.dto';

@ApiTags('stories')
@Controller('story')
@UseGuards(JwtAuthGuard)
export class StoryController {
  constructor(private readonly storyService: StoryService) {}

  @Post()
  async create(
    @Body() createStoryDto: CreateStoryDto,
    @Query('userId') userId: string,
  ): Promise<Story> {
    return this.storyService.create(createStoryDto, userId);
  }

  @Get()
  async findAll(): Promise<Story[]> {
    return this.storyService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Story> {
    return this.storyService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateStoryDto: UpdateStoryDto,
  ): Promise<Story> {
    return this.storyService.update(id, updateStoryDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Story> {
    return this.storyService.remove(id);
  }

  @Get('genre-stories')
  async findByGenre(@Query('genre') genre: string) {
    if (!genre) {
      return { message: 'Genre is required' };
    }
    return this.storyService.findByGenre(genre);
  }

  @Get('my-stories')
  async findMyStories(@Req() req: any) {
    const userId = req.user.userId;
    return this.storyService.findByUser(userId);
  }
}
