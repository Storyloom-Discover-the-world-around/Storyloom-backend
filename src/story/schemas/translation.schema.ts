import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Translation {
  @Prop({ type: Types.ObjectId, ref: 'Story', required: true })
  storyId: Types.ObjectId;

  @Prop({ required: true })
  language: string;

  @Prop({ required: true })
  translatedText: string;

  @Prop({ default: 'Automated' })
  translator: string;

  @Prop({ default: false })
  approved: boolean;
}

export type TranslationDocument = Translation & Document;
export const TranslationSchema = SchemaFactory.createForClass(Translation);
