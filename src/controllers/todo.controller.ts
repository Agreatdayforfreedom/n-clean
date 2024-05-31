import { Controller, Get, Injectable } from '@nestjs/common';
import { UCTodo } from '../use-cases/todo/todo.use-case';

@Controller()
export class TodoController {
  constructor(private uc_todo: UCTodo) {}

  @Get()
  addTodo() {
    return this.uc_todo.addTodo({ title: 'title', description: 'asd' });
  }
}
