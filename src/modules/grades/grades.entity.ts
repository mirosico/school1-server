import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Grade {
  @PrimaryGeneratedColumn()
  id: string;

  @Column('int')
  userId: number;

  @Column('varchar', { length: 3 })
  grade: string;
}
