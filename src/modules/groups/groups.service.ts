import { Injectable } from '@nestjs/common';
import { Group } from './groups.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../users/users.entity';

@Injectable()
export class GroupsService {
  constructor(
    @InjectRepository(Group)
    private subjectGroupRepository: Repository<Group>,
  ) {}

  async findAll(user: User): Promise<Group[]> {
    return this.subjectGroupRepository.find({
      where: { userId: user.id },
      relations: ['subject', 'teacher'],
    });
  }

  async findById(id: string, user: User): Promise<Group | undefined> {
    return this.subjectGroupRepository.findOneBy({ id, userId: user.id });
  }

  async create(subjectGroup: Group, user: User): Promise<Group> {
    return this.subjectGroupRepository.save({
      ...subjectGroup,
      userId: user.id,
    });
  }

  async update(
    id: string,
    subjectGroup: Group,
    user: User,
  ): Promise<Group | undefined> {
    await this.subjectGroupRepository.update(
      { id, userId: user.id },
      subjectGroup,
    );
    return this.subjectGroupRepository.findOneBy({ id, userId: user.id });
  }

  async delete(id: string, user: User): Promise<void> {
    await this.subjectGroupRepository.delete({ id, userId: user.id });
  }
}
