import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';

import { Category } from '../../../../../categories/infra/typeorm/entities/category.entity';
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

  @Column('jsonb', { nullable: true })
  additional_info: {
    isbn10: string;
    isbn13: string;
    language: string;
    pageCount: number;
    publisher: string;
    published: number;
  };

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = randomUUID();
    }
  }
}
