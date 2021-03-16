import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Gallery } from './gallery.schema';

export type CountryDocument = Country & Document;

@Schema()
export class Country {
  @Prop({ unique: true })
  name: string;

  @Prop()
  imageUrl: string;

  @Prop()
  videoUrl: string;

  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'Gallery' }] })
  gallery: Gallery[];
}

export const CountrySchema = SchemaFactory.createForClass(Country);
