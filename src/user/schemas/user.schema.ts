import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Role } from 'src/auth/role.enum';
import { v4 as uuidv4 } from 'uuid';

@Schema()
export class User {
  @Prop({ default: uuidv4 })
  userId: string;

  @Prop({ unique: true, required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ type: [String], enum: Role, default: [Role.User] })
  roles: Role[];

  @Prop({
    type: Object,
    default: {
      type: 'free',
      startDate: null,
      expiryDate: null,
    },
  })
  subscriptions: Record<string, any>;

  @Prop({
    type: Object,
    default: {
      genre: [],
      language: [],
      readingHistory: [],
    },
  })
  preferences: Record<string, any>;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Story' }] })
  favoriteStories: Types.ObjectId[];

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Story' }] })
  likedStories: Types.ObjectId[];

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Story' }] })
  storiesContributed: Types.ObjectId[];

  @Prop({ default: 0 })
  points: number;

  @Prop({ type: [String], default: [] })
  badges: string[];
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);
