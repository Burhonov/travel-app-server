import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
export declare class UserService {
    private readonly userModel;
    constructor(userModel: Model<UserDocument>);
    all(): Promise<User[]>;
    create(data: any): Promise<User>;
    findOne(condition: any): Promise<User>;
}
