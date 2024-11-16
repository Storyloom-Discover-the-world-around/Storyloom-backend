import { Injectable } from '@nestjs/common';
import { Story, StoryDocument } from './schemas/story.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CreateStoryDto } from './dto/create-story.dto/create-story.dto';
import { UpdateStoryDto } from './dto/update-story.dto/update-story.dto';
import { UserDocument } from 'src/user/schemas/user.schema';

@Injectable()
export class StoryService {
  constructor(
    @InjectModel('story') private storyModel: Model<StoryDocument>,
    @InjectModel('User') private userModel: Model<UserDocument>,
  ) {}

  async create(createStoryDto: CreateStoryDto, userId: string): Promise<Story> {
    const newStory = new this.storyModel({
      ...createStoryDto,
      createdBy: userId,
    });
    const story = await newStory.save();

    await this.userModel.findByIdAndUpdate(userId, {
      $addToSet: { storiesContributed: story._id },
    });

    return story;
  }

  async findAll(): Promise<Story[]> {
    return this.storyModel.find().exec();
  }

  async findOne(id: string): Promise<Story> {
    return this.storyModel.findById(id).exec();
  }

  async update(id: string, updateStoryDto: UpdateStoryDto): Promise<Story> {
    return this.storyModel
      .findByIdAndUpdate(id, updateStoryDto, { new: true })
      .exec();
  }

  async remove(id: string): Promise<Story> {
    return this.storyModel.findByIdAndDelete(id).exec();
  }

  async findByGenre(genre: string): Promise<Story[]> {
    return this.storyModel.find({ genre }).exec();
  }

  async findByUser(userId: string): Promise<Story[]> {
    return this.storyModel
      .find({ createdBy: new Types.ObjectId(userId) })
      .exec();
  }
}
