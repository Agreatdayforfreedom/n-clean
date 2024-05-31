import { Injectable } from '@nestjs/common';
import { Todo } from '../../domain/entity/todo.entity';
import { dbAdapter } from '../../adapters/db.adapter';

@Injectable()
export class UCTodo {
  constructor(private db: dbAdapter) {}

  addTodo(todo: Todo) {
    return this.db.create(todo);
  }
}
