/// <reference types="multer" />
import { Request, Response } from 'express';
export declare class UploadController {
    uploadFile(file: Express.Multer.File, req: Request): {
        url: string;
    };
    getFile(path: any, res: Response): Promise<void>;
}
