import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { TeachersService } from './teachers.service';
import { Teacher } from './teachers.entity';
import { AuthGurad } from '../gurads/auth.gurad';
import { CurrentUser } from '../decorators/current-user.decorator';
import { User } from '../users/users.entity';

@UseGuards(AuthGurad)
@Controller('teachers')
export class TeachersController {
  constructor(private readonly teacherService: TeachersService) {}

  @Get()
  async findAll(@CurrentUser() user: User): Promise<Teacher[]> {
    return this.teacherService.findAll(user);
  }

  @Get(':id')
  async findById(
    @Param('id') id: string,
    @CurrentUser() user: User,
  ): Promise<Teacher> {
    return this.teacherService.findById(id, user);
  }

  @Post()
  async create(
    @Body() teachers: Teacher[],
    @CurrentUser() user: User,
  ): Promise<Teacher[]> {
    return this.teacherService.create(teachers, user);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() teacher: Teacher,
    @CurrentUser() user: User,
  ): Promise<Teacher> {
    return this.teacherService.update(id, teacher, user);
  }

  @Delete(':id')
  async delete(
    @Param('id') id: string,
    @CurrentUser() user: User,
  ): Promise<void> {
    return this.teacherService.delete(id, user);
  }
}
