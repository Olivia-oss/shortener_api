import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Url {
  @Prop({
    type: String,
    trim: true,
  })
  url: string;

  @Prop({
    type: String,
    trim: true,
  })
  shortUrl: string;

  @Prop({
    type: Number,
  })
  visits: number;
}

export const UrlSchema = SchemaFactory.createForClass(Url);
