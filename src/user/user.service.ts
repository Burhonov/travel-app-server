import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,
  ) {}

  async all(): Promise<User[]> {
    return this.userModel.find({});
  }

  async create(data): Promise<User> {
    const createdUser = new this.userModel(data);
    return createdUser.save();
  }

  async findOne(condition): Promise<User> {
    const doc = await this.userModel
      .findOne(condition)
      .select(['-_id', '-__v'])
      .exec();
    return doc.toObject();
  }
}
