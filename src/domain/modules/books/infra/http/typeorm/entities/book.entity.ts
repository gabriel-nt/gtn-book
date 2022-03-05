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
import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';

@Entity('books')
@ApiExtraModels()
export class Book {
  @PrimaryColumn()
  @ApiProperty()
  id: string;

  @Column()
  @ApiProperty()
  title: string;

  @Column()
  @ApiProperty()
  description: string;

  @Column()
  @ApiProperty()
  image_url: string;

  @Column()
  @ApiProperty()
  authors: string;

  @Column()
  @ApiProperty()
  category_id: string;

  @JoinColumn({
    name: 'category_id',
  })
  @ManyToOne(() => Category)
  @ApiProperty()
  category: Category;

  @Column('jsonb', { nullable: true })
  @ApiProperty()
  additional_info: {
    isbn10: string;
    isbn13: string;
    language: string;
    pageCount: number;
    publisher: string;
    published: number;
  };

  @CreateDateColumn()
  @ApiProperty()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = randomUUID();
    }
  }
}
