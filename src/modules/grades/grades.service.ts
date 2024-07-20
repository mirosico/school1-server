import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/users.entity';
import { Grade } from './grades.entity';

@Injectable()
export class GradesService {
  constructor(
    @InjectRepository(Grade)
    private gradeRepository: Repository<Grade>,
  ) {}

  async findAll(user: User): Promise<Grade[]> {
    return this.gradeRepository.find({
      where: { userId: user.id },
    });
  }

  async findById(id: string, user: User): Promise<Grade | undefined> {
    return this.gradeRepository.findOneBy({ id, userId: user.id });
  }

  async findByGrade(grade: string, user: User): Promise<Grade | undefined> {
    return this.gradeRepository.findOneBy({ grade, userId: user.id });
  }

  async create(grades: Grade[], user: User): Promise<Grade[]> {
    const gradesWithUserId = grades.map((grade) => ({
      ...grade,
      userId: user.id,
    }));
    return this.gradeRepository.save(gradesWithUserId);
  }
}
