import { Module } from '@nestjs/common';
import { dbAdapter } from './db.adapter';
import { DB } from '../extern/db';

@Module({
  providers: [dbAdapter, DB],
  exports: [dbAdapter],
})
export class DbAdapterModule {}
