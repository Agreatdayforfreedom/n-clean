import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { DB } from '../extern/db';

//provider
@Injectable()
export class dbAdapter {
  constructor(private db: DB) {}

  async create(data: any) {
    return this.db.addOne(data);
  }

  async findOne(data: any) {
    return this.db.findOne(data);
  }
}
