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
}

export const UrlSchema = SchemaFactory.createForClass(Url);
