import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type GalleryDocument = Gallery & Document;

@Schema()
export class Gallery {
  @Prop()
  imgUrl: string;
}

export const GallerySchema = SchemaFactory.createForClass(Gallery);
