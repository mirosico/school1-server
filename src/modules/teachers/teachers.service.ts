import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Teacher } from './teachers.entity';
import { Repository } from 'typeorm';
import { User } from '../users/users.entity';

@Injectable()
export class TeachersService {
  constructor(
    @InjectRepository(Teacher)
    private teacherRepository: Repository<Teacher>,
  ) {}

  async findAll(user: User): Promise<Teacher[]> {
    return this.teacherRepository.find({
      where: { userId: user.id },
    });
  }

  async findById(id: string, user: User): Promise<Teacher | undefined> {
    return this.teacherRepository.findOneBy({ id, userId: user.id });
  }

  async create(teachers: Teacher[], user: User): Promise<Teacher[]> {
    const teachersWithUserId = teachers.map((teacher) => ({
      ...teacher,
      userId: user.id,
    }));
    return this.teacherRepository.save(teachersWithUserId);
  }

  async update(
    id: string,
    teacher: Teacher,
    user: User,
  ): Promise<Teacher | undefined> {
    await this.teacherRepository.update({ id, userId: user.id }, teacher);
    return this.teacherRepository.findOneBy({ id, userId: user.id });
  }

  async delete(id: string, user: User): Promise<void> {
    await this.teacherRepository.delete({ id, userId: user.id });
  }
}
