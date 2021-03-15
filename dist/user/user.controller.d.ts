import { UserService } from './user.service';
import { User } from './schemas/user.schema';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    all(): Promise<User[]>;
}
