import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { RepositoryModule } from './Repository/repository.module';

@Module({
  imports: [BookModule , RepositoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
