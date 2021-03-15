import {
  Controller,
  Get,
  Param,
  Post,
  Req,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Request, Response } from 'express';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import { extname } from 'path';
import { format } from 'url';

@Controller()
export class UploadController {
  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename(_, file: Express.Multer.File, callback): void {
          const uniqueName = uuidv4();
          return callback(null, `${uniqueName}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  uploadFile(@UploadedFile() file: Express.Multer.File, @Req() req: Request) {
    const fileUrl = format({
      protocol: req.protocol,
      host: req.get('host'),
      pathname: file.path,
    });
    return {
      url: fileUrl,
    };
  }

  @Get('uploads/:path')
  async getFile(@Param('path') path, @Res() res: Response) {
    res.sendFile(path, { root: 'uploads' });
  }
}
