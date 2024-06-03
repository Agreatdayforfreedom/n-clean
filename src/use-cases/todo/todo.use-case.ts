import { Injectable } from '@nestjs/common';
import { Todo } from '../../domain/entity/todo.entity';
import { dbAdapter } from '../../adapters/db.adapter';

@Injectable()
export class UCTodo {
  constructor(private db: dbAdapter) {}

  async addTodo(todo: Todo) {
    return await this.db.create(todo);
  }
}
