import { Module } from '@nestjs/common';
import { UCTodo } from './todo.use-case';
import { dbAdapter } from '../../adapters/db.adapter';
import { DB } from '../../extern/db';

@Module({
  providers: [UCTodo, dbAdapter, DB],
  exports: [UCTodo],
})
export class TodoModule {}
