import { Injectable } from '@nestjs/common';
import * as crypto from 'crypto';

@Injectable()
export class DB {
  private storage = new Map<string, any>();

  constructor() {}

  findOne(id: string) {
    return this.storage.get(id);
  }

  addOne(data: any) {
    let id = crypto.randomUUID();

    const toDB = {
      id,
      data,
    };
    return this.storage.set(id, toDB).get(id);
  }
}
