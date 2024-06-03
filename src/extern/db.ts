import { Inject, Injectable } from '@nestjs/common';
import * as crypto from 'crypto';
import { Repository } from 'typeorm';
import { Todo } from '../domain/entity/todo.entity';

@Injectable()
export class DB {
  private storage = new Map<string, any>();

  constructor(
    @Inject('TODO_REPOSITORY')
    private readonly todoRepository: Repository<Todo>,
  ) {}

  findOne(id: string) {
    return this.storage.get(id);
  }

  async addOne(data: any) {
    let c = this.todoRepository.create({
      description: data.description,
      title: data.title,
    });
    return await this.todoRepository.save(c);
  }
}
