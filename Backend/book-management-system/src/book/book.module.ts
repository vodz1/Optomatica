import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { RepositoryModule } from 'src/Repository/repository.module';

@Module({
  imports : [RepositoryModule],
  controllers: [BookController],
  providers: [BookService],
  exports : [BookService]
})
export class BookModule {}
