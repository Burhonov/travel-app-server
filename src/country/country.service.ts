import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Country, CountryDocument } from './schemas/country.schema';
import { Gallery, GalleryDocument } from './schemas/gallery.schema';
import { Model } from 'mongoose';

@Injectable()
export class CountryService {
  constructor(
    @InjectModel(Country.name)
    private readonly countryModel: Model<CountryDocument>,
    @InjectModel(Gallery.name)
    private readonly galleryModel: Model<GalleryDocument>,
  ) {}

  async all(): Promise<Country[]> {
    return this.countryModel
      .find({})
      .select(['-_id', '-__v'])
      .populate('gallery')
      .lean()
      .exec();
  }

  async one(condition): Promise<Country> {
    return this.countryModel
      .findOne(condition)
      .select(['-_id', '-__v'])
      .populate('gallery')
      .lean()
      .exec();
  }

  async insertMany(data): Promise<any[]> {
    const res = await Promise.all(
      data.map(async (country) => {
        const { gallery, ...countryData } = country;
        const galleryIds = [];
        if (Array.isArray(gallery) && gallery.length > 0) {
          const galRes = await this.galleryModel.collection.insertMany(gallery);
          galRes.ops.forEach(({ _id }) => galleryIds.push(_id));
        }
        return await this.countryModel.create({
          ...countryData,
          gallery: galleryIds,
        });
      }),
    );
    return res;
  }
}
