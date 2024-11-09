/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Book, BookSchema } from 'src/book/Schema/book.schema';
import { BookRepository } from './book.repository';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/BookManagement-db'),
    MongooseModule.forFeature([
      { name: Book.name, schema: BookSchema },
    ]),
  ],
  providers: [BookRepository],
  exports: [BookRepository],
})
export class RepositoryModule {}
