import { Injectable } from '@nestjs/common';

@Injectable()
export class StoryService {
  getStories(): string {
    return 'Hello Stories!';
  }
}
