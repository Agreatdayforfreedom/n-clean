import { Module } from '@nestjs/common';
import { DB } from './db';
import { databaseProviders } from './dbProvider';
import { todoProviders } from '../domain/entity/todo.provider';

@Module({
  providers: [...databaseProviders, ...todoProviders],
  exports: [...databaseProviders, ...todoProviders],
})
export class DBModule {}
