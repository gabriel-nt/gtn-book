import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';

import { Category } from 'domain/modules/categories/infra/typeorm/entities/category.entity';
import { randomUUID } from 'crypto';

@Entity('books')
export class Book {
  @PrimaryColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  image_url: string;

  @Column()
  authors: string;

  @Column()
  category_id: string;

  @JoinColumn({
    name: 'category_id',
  })
  @ManyToOne(() => Category)
  category: Category;

  @Column()
  additional_info: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = randomUUID();
    }
  }
}
