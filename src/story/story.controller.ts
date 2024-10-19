import { Controller, Get, Param } from '@nestjs/common';
import { StoryService } from './story.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('stories')
@Controller('story')
export class StoryController {
  constructor(private readonly storyService: StoryService) {}

  @Get('/')
  getStories(): string {
    return this.storyService.getStories();
  }

  @Get('/:genre')
  genreStories(@Param('genre') genre: string): string {
    return genre;
  }
}
