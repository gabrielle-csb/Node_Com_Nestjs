import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'todos' })
export class TodoEntity {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty()
  id: string;

  @Column()
  @ApiProperty()
  task: string;

  @Column({ name: 'is_done', type: 'tinyint', width: 1 })
  @ApiProperty()
  isDone: number;

  @CreateDateColumn({ name: 'created_at' })
  @ApiProperty()
  createdAt: string;

  @UpdateDateColumn({ name: 'update_at' })
  @ApiProperty()
  updateAt: string;

  @DeleteDateColumn({ name: 'delete_at' })
  @ApiProperty()
  deleteAt: string;
}
