import { Module } from '@nestjs/common';
import { TodoModule } from './use-cases/todo/todo.module';
import { TodoController } from './controllers/todo.controller';
import { DbAdapterModule } from './adapters/db-adapter.module';

@Module({
  imports: [TodoModule, DbAdapterModule],
  controllers: [TodoController],
  providers: [],
})
export class AppModule {}
