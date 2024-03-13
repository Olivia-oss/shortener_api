import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UrlService } from '../services/url.service';
import { generatorUrl } from '../utils/generator-url';
import { CreateUrl } from '../dtos/create_url.dto';

@Controller('urls')
export class UrlController {
  constructor(private urlService: UrlService) {}

  @Post()
  async createUrl(@Body() url: CreateUrl) {
    try {
      url.shortUrl = generatorUrl(6);
      url.visits = 0;
      return this.urlService.createUrlShortener(url);
    } catch (error) {
      throw 'Failed to create url shortener';
    }
  }

  @Get(':url')
  async getUrl(@Param('url') url: string) {
    try {
      return this.urlService.findByUrlShortener(url);
    } catch (error) {
      throw 'Failed to get url shortener';
    }
  }

  @Get('/open/:url')
  async getUrlOpen(@Param('url') url: string) {
    try {
      return this.urlService.findByUrlOpen(url);
    } catch (error) {
      throw 'Failed to get url shortener';
    }
  }
}
