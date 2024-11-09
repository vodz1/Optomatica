import { Injectable } from '@nestjs/common';
import { BaseAbstractRepository } from './base.abstract.repository';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from 'src/book/Schema/book.schema';

@Injectable()
export class BookRepository extends BaseAbstractRepository<Book> {
  constructor(@InjectModel(Book.name)private readonly bookModel: Model<Book>) {
    super(bookModel);
  }

  async findWithFilters(title?: string, year?: number) {
    const filters: any = {};

    if (title) {
        filters.title = { $regex: title, $options: 'i' }; // Case-insensitive partial match
    }
    if (year) {
        filters.publishedDate = {
            $gte: new Date(`${year}-01-01`),
            $lt: new Date(`${year + 1}-01-01`),
        };
    }

    return this.bookModel.find(filters).exec();
}

}