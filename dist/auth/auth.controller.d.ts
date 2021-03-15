import { UserService } from '../user/user.service';
import { RegisterDto } from './models/register.dto';
import { JwtService } from '@nestjs/jwt';
import { Request, Response } from 'express';
export declare class AuthController {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    register(body: RegisterDto): Promise<import("../user/schemas/user.schema").User>;
    login(username: string, password: string, response: Response): Promise<import("../user/schemas/user.schema").User>;
    user(request: Request): Promise<import("../user/schemas/user.schema").User>;
    logout(response: Response): Promise<{
        message: string;
    }>;
}
