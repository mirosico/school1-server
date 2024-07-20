import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Teacher } from '../teachers/teachers.entity';
import { Group } from '../groups/groups.entity';

@Entity()
export class Lesson {
  @PrimaryGeneratedColumn()
  id: string;

  @Column('jsonb')
  time: Time;

  @Column('int')
  userId: number;

  @ManyToOne(() => Group, (subjectGroup) => subjectGroup.lessons)
  group: Group;

  @ManyToOne(() => Teacher, (teacher) => teacher.subjectGroups)
  teacher: Teacher;
}
