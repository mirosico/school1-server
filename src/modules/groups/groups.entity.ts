import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Subject } from '../subjects/subjects.entity';
import { Teacher } from '../teachers/teachers.entity';
import { Lesson } from '../lessons/lessons.entity';

@Entity()
export class Group {
  @PrimaryGeneratedColumn()
  id: string;

  @Column('int')
  userId: number;

  @Column('int')
  group: number;

  @ManyToOne(() => Subject, (subject) => subject.subjectGroups)
  subject: Subject;

  @ManyToOne(() => Teacher, (teacher) => teacher.subjectGroups)
  teacher: Teacher;

  @OneToMany(() => Lesson, (lesson) => lesson.group)
  lessons: Lesson[];
}
