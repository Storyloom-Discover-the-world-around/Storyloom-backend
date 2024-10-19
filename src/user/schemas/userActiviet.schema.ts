import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class UserActivity {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  userId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Story' })
  storyId: Types.ObjectId;

  @Prop({ required: true })
  action: string; // e.g., 'Read', 'Like', 'Comment', 'Share'

  @Prop({ default: 0 })
  duration: number; // Time spent on reading in minutes
}

export type UserActivityDocument = UserActivity & Document;
export const UserActivitySchema = SchemaFactory.createForClass(UserActivity);
