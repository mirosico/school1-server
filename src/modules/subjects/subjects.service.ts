import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Subject } from './subjects.entity';
import { defaultGradesSubjectsMap, subjectsConfig } from './subjects.config';
import { User } from '../users/users.entity';
import { Grade } from '../grades/grades.entity';

@Injectable()
export class SubjectService {
  constructor(
    @InjectRepository(Subject)
    private subjectRepository: Repository<Subject>,
  ) {}

  async findAll(user: User): Promise<Subject[]> {
    return this.subjectRepository.find({
      where: { userId: user.id },
    });
  }

  async findById(id: string, user: User): Promise<Subject | undefined> {
    return this.subjectRepository.findOneBy({
      id,
      userId: user.id,
    });
  }

  async create(subject: Subject, user: User): Promise<Subject> {
    return this.subjectRepository.save({ ...subject, userId: user.id });
  }

  async update(id: string, subject: Subject, user: User): Promise<Subject> {
    await this.subjectRepository.update({ id, userId: user.id }, subject);
    return this.subjectRepository.findOneBy({
      id,
    });
  }

  async delete(id: string, user: User): Promise<void> {
    await this.subjectRepository.delete({ id, userId: user.id });
  }

  getPossibleGrades(subjectKey: Subject['key']): string[] {
    const grades = Object.keys(defaultGradesSubjectsMap) as GradeNumber[];
    return grades.filter((grade) =>
      defaultGradesSubjectsMap[grade].includes(subjectKey),
    );
  }

  getSubjectsConfig() {
    return subjectsConfig.map((subject) => {
      return {
        ...subject,
        possibleGrades: this.getPossibleGrades(subject.key),
      };
    });
  }
}
