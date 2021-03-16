import { Body, Controller, Get, Post } from '@nestjs/common';
import { CountryService } from './country.service';
import { Country } from './schemas/country.schema';

@Controller()
export class CountryController {
  constructor(private countryService: CountryService) {}

  @Get('countries')
  all(): Promise<Country[]> {
    return this.countryService.all();
  }

  @Post('countries')
  async insertMany(@Body() body): Promise<Country[]> {
    return this.countryService.insertMany(body);
  }
}
