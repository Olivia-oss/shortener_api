import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Url } from '../schemas/url.schema';
import { Model } from 'mongoose';
import { CreateUrl } from '../dtos/create_url.dto';

@Injectable()
export class UrlService {
  constructor(@InjectModel(Url.name) private urlService: Model<Url>) {}

  async findByUrlShortener(url: string) {
    return this.urlService.findOne({ shortUrl: url });
  }

  async findByUrlOpen(url: string) {
    const data = await this.urlService.findOne({ shortUrl: url });
    const visits = data['visits'] + 1;

    return this.urlService.findOneAndUpdate(
      { shortUrl: url },
      { visits: visits },
      { new: true },
    );
  }

  async createUrlShortener(url: CreateUrl) {
    const createdUrl = new this.urlService(url);
    return createdUrl.save();
  }
}
