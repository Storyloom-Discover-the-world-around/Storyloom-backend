import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { CreateUserDto, LoginUserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private userModel: Model<UserDocument>,
    private readonly jwtService: JwtService,
  ) {
    this.logJwtSecret(); // Call the method here
  }

  private logJwtSecret() {
    const jwtSecret = process.env.JWT_SECRET;
  }
  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const { email, password } = createUserDto;

    const existingUser = await this.userModel.findOne({ email });
    if (existingUser) {
      throw new BadRequestException('User already exists');
    }

    const passwordHashed = await bcrypt.hash(password, 10);
    const user = new this.userModel({ ...createUserDto, passwordHashed });
    return user.save();
  }

  async login(loginUserDto: LoginUserDto): Promise<{ accessToken: string }> {
    const { email, password } = loginUserDto;

    const user = await this.userModel.findOne({ email });
    if (!user) {
      throw new UnauthorizedException('Invalid Credentials');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid Credentials');
    }

    const payload = {
      userId: user._id,
      email: user.email,
      roles: user.roles,
    };
    const accessToken = this.jwtService.sign(payload);

    return { accessToken };
  }

  async verifySubscription(userId: string): Promise<boolean> {
    const user = await this.userModel.findById(userId);
    if (!user || user.subscriptions.type === 'free') {
      return false;
    }

    const expiryDate = new Date(user.subscriptions.expiryDate);
    return expiryDate > new Date();
  }
}
