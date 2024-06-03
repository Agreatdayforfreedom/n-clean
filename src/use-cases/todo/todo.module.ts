import { Module } from '@nestjs/common';
import { UCTodo } from './todo.use-case';
import { DbAdapterModule } from '../../adapters/db-adapter.module';
import { TodoController } from '../../controllers/todo.controller';

@Module({
  imports: [DbAdapterModule],
  controllers: [TodoController],
  providers: [UCTodo],
  exports: [UCTodo],
})
export class TodoModule {}
