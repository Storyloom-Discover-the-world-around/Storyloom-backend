import { Controller, Post, Body } from '@nestjs/common';
import { TranslationService } from './translation.service';
import { TranslateRequestDto } from './dto/create-translation.dto/translate-request.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Translate')
@Controller('translation')
export class TranslationController {
  constructor(private readonly translationService: TranslationService) {}

  @Post('/translate')
  async translateStory(
    @Body() translateDto: TranslateRequestDto,
  ): Promise<any> {
    const translationResult = await this.translationService.translateStory(
      'userId',
      translateDto.storyId,
      translateDto.targetLanguage,
    );

    return {
      message: 'Translation successful',
      translation: translationResult,
    };
  }
}
