import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  async create(login: string, password: string) {
    const user = this.repo.create({ login, password });
    return this.repo.save(user);
  }

  async findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  async find(login: string) {
    return this.repo.find({ where: { login } });
  }

  async update(id: number, attrs: Partial<User>) {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException('User not fount');
    }
    Object.assign(user, attrs);
    return this.repo.save(user);
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException('User not fount');
    }
    return this.repo.remove(user);
  }
}
