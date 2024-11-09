import { Injectable, NotFoundException } from '@nestjs/common';
import { BookRepository } from 'src/Repository/book.repository';
import { createBook } from './DTO/createBook.dto';
import { updateBook } from './DTO/updateBook.dto';
import { ErrorMessages } from 'src/common/enums/errors.enum';
import { Messages } from 'src/common/enums/messages.enum';

@Injectable()
export class BookService {
    constructor(private readonly bookRepository : BookRepository) {}

    add(data : createBook){
        return this.bookRepository.create(data)
    }


    getAll(title?: string, year?: number) {
        return this.bookRepository.findWithFilters(title, year);
    }


   async getById(id : string){
        const foundBook = await this.bookRepository.findById(id)
        if(!foundBook){
            throw new NotFoundException(ErrorMessages.Book.bookNotFound)
        }

        return foundBook
    }


   async update(id : string , data : updateBook){
        const updatedBook = await this.bookRepository.updateById(id , data)
        if(!updatedBook){
            throw new NotFoundException(ErrorMessages.Book.bookNotFound)
        }
        return {message : Messages.Book.updateBook , updatedBook}
    }


    async delete(id: string) {
        const result = await this.bookRepository.deleteById(id);
        if (!result) throw new NotFoundException(ErrorMessages.Book.bookNotFound);
        return { message: Messages.Book.deleteBook , result };
      }


}
