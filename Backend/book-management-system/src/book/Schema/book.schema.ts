import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Book extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  author: string;

  @Prop({ type: Date })
  publishedDate: Date;

  @Prop()
  description?: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);
