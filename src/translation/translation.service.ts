/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@nestjs/common';
import Groq from 'groq-sdk';

@Injectable()
export class TranslationService {
  private groq;

  constructor() {
    this.groq = new Groq({ apiKey: process.env.GROG_API_KEY_TRANSLATION });
  }

  async translateStory(
    userId: string,
    storyId: string,
    targetLanguage: string,
  ) {
    const demoStory = 'This is going to be a testing story.';

    try {
      const response = await this.getGroqChatCompletion(
        targetLanguage,
        demoStory,
      );

      const translatedText =
        response.choices[0]?.message?.content || 'No translation found';

      this.updateTranslationCredits();

      return {
        storyId,
        targetLanguage,
        translatedText,
      };
    } catch (error) {
      throw new Error('Translation failed');
    }
  }

  private async getGroqChatCompletion(targetLanguage: string, content: string) {
    try {
      const response = await this.groq.chat.completions.create({
        messages: [
          {
            role: 'user',
            content: `Translate this story into ${targetLanguage}: "${content}"`,
          },
        ],
        model: 'llama-3.1-70b-versatile',
      });

      return response;
    } catch (error) {
      console.error('Error in Groq API call:', error);
      throw new Error('Failed to get Groq chat completion');
    }
  }

  private updateTranslationCredits() {}
}
