import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Story {
  @Prop({ required: true })
  title: string;

  @Prop({ default: 'Anonymous' })
  author: string;

  @Prop({ })
  country: string;

  @Prop({ required: true })
  genre: string;

  @Prop({  })
  language: string;

  @Prop({
    type: [{ language: String, text: String }],
  })
  translations: Record<string, string>[];

  @Prop({ required: true })
  content: string;

  @Prop({ default: null })
  audio: string; // URL to audio narration

  @Prop({ default: 0 })
  likes: number;

  @Prop({ default: 0 })
  views: number;

  @Prop({ default: Date.now })
  publishedAt: Date;

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  createdBy: Types.ObjectId;
}

export type StoryDocument = Story & Document;
export const StorySchema = SchemaFactory.createForClass(Story);
