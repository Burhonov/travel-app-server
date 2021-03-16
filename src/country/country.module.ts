import { Module } from '@nestjs/common';
import { CountryService } from './country.service';
import { CountryController } from './country.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Country, CountrySchema } from './schemas/country.schema';
import { Gallery, GallerySchema } from './schemas/gallery.schema';
import { CommonModule } from '../common/common.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Country.name, schema: CountrySchema },
      {
        name: Gallery.name,
        schema: GallerySchema,
      },
    ]),
    CommonModule,
  ],
  providers: [CountryService],
  controllers: [CountryController],
})
export class CountryModule {}
