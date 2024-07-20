import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Group } from '../groups/groups.entity';

@Entity()
export class Teacher {
  @PrimaryGeneratedColumn()
  id: string;

  @Column('int')
  userId: number;

  @Column({ length: 100 })
  name: string;

  @Column('varchar', { array: true, nullable: true })
  subjectKeys: string[];

  @Column('jsonb', { nullable: true })
  notAvailable: Time[];

  @OneToMany(() => Group, (subjectGroup) => subjectGroup.teacher)
  subjectGroups: Group[];
}
