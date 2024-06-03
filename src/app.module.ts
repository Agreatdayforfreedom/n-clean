import { Module } from '@nestjs/common';
import { TodoModule } from './use-cases/todo/todo.module';
import { TodoController } from './controllers/todo.controller';
import { DbAdapterModule } from './adapters/db-adapter.module';
import { DBModule } from './extern/db.module';

@Module({
  imports: [TodoModule, DbAdapterModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
