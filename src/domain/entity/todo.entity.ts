// export interface Todo {
//   title: string;
//   description: string;
// }

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id?: string;

  @Column({ length: 500 })
  title: string;

  @Column('text')
  description: string;
}
