import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UrlService } from '../services/url.service';
import { generatorUrl } from '../utils/generator-url';
import { CreateUrl } from '../dtos/create_url.dto';
import { CreateUrlSimple } from '../dtos/create_url_simple';

@Controller('urls')
export class UrlController {
  constructor(private urlService: UrlService) {}

  @Post()
  async createUrl(@Body() urlNew: CreateUrlSimple) {
    try {
      const shortUrl = generatorUrl(6);
      const createUrl: CreateUrl = {
        url: urlNew.url,
        shortUrl,
        visits: 0,
      };

      return this.urlService.createUrlShortener(createUrl);
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
