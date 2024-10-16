import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
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
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);
