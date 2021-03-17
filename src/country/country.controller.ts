import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CountryService } from './country.service';
import { Country } from './schemas/country.schema';

@Controller()
export class CountryController {
  constructor(private countryService: CountryService) {}

  @Get('countries')
  all(): Promise<Country[]> {
    return this.countryService.all();
  }

  @Get('countries/:name')
  one(@Param('name') name): Promise<Country> {
    return this.countryService.one({
      name: new RegExp(['^', name, '$'].join(''), 'i'),
    });
  }

  @Post('countries')
  async insertMany(@Body() body): Promise<Country[]> {
    return this.countryService.insertMany(body);
  }
}
