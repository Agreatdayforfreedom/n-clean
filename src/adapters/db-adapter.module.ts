import { Module } from '@nestjs/common';
import { dbAdapter } from './db.adapter';
import { DB } from '../extern/db';
import { DBModule } from '../extern/db.module';

@Module({
  imports: [DBModule],
  providers: [dbAdapter, DB],
  exports: [dbAdapter],
})
export class DbAdapterModule {}
