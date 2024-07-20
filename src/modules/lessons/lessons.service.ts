import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lesson } from './lessons.entity';
import { Repository } from 'typeorm';
import { User } from '../users/users.entity';

@Injectable()
export class LessonsService {
  constructor(
    @InjectRepository(Lesson)
    private lessonRepository: Repository<Lesson>,
  ) {}

  async findAll(user: User): Promise<Lesson[]> {
    return this.lessonRepository.find({
      where: { userId: user.id },
      relations: ['group', 'teacher'],
    });
  }

  async findById(id: string, user: User): Promise<Lesson | undefined> {
    return this.lessonRepository.findOneBy({ id, userId: user.id });
  }

  async create(lesson: Lesson, user: User): Promise<Lesson> {
    return this.lessonRepository.save({ ...lesson, userId: user.id });
  }

  async update(
    id: string,
    lesson: Lesson,
    user: User,
  ): Promise<Lesson | undefined> {
    await this.lessonRepository.update(id, lesson);
    return this.lessonRepository.findOneBy({ id, userId: user.id });
  }

  async delete(id: string, user: User): Promise<void> {
    await this.lessonRepository.delete({ id, userId: user.id });
  }
}
