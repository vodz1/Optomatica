import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { BookService } from './book.service';
import { createBook } from './DTO/createBook.dto';
import { updateBook } from './DTO/updateBook.dto';

@Controller('books')
export class BookController {

    constructor(private readonly bookService : BookService){}

    @Post()
    async create(
      @Body() data: createBook,
    ) {
      return this.bookService.add(data);
    }


    @Get()
    async findAll(
        @Query('title') title?: string,
        @Query('year') year?: number,
    ) {
        return this.bookService.getAll(title, year);
    }


    @Get(':id')
    async findById(@Param('id') id: string) {
      return this.bookService.getById(id);
    }
  
    @Put(':id')
    async update(
      @Param('id') id: string,
      @Body() data: updateBook,
    ) {
      return this.bookService.update(id, data);
    }
  
    @Delete(':id')
    async delete(@Param('id') id: string) {
      return this.bookService.delete(id);
    }
  
}
