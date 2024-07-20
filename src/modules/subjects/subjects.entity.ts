import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Group } from '../groups/groups.entity';

@Entity()
export class Subject {
  @PrimaryGeneratedColumn()
  id: string;

  @Column('int')
  userId: number;

  @Column({ length: 100 })
  key: string;

  @Column({ length: 100 })
  label: string;

  @Column('int')
  difficulty: number;

  @Column('varchar', { length: 3 })
  grade: string;

  @Column('int')
  hours: number;

  @Column('int')
  groupNumber: number;

  @Column('varchar', { array: true, nullable: true })
  forbiddenSameDaySubjectKeys: string[];

  @OneToMany(() => Group, (subjectGroup) => subjectGroup.subject)
  subjectGroups: Group[];
}
