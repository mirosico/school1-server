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
import { LessonsService } from './lessons.service';
import { Lesson } from './lessons.entity';
import { AuthGurad } from '../gurads/auth.gurad';
import { CurrentUser } from '../decorators/current-user.decorator';
import { User } from '../users/users.entity';

@UseGuards(AuthGurad)
@Controller('lessons')
export class LessonsController {
  constructor(private readonly lessonService: LessonsService) {}

  @Get()
  async findAll(@CurrentUser() user: User): Promise<Lesson[]> {
    return this.lessonService.findAll(user);
  }

  @Get(':id')
  async findById(
    @Param('id') id: string,
    @CurrentUser() user: User,
  ): Promise<Lesson> {
    return this.lessonService.findById(id, user);
  }

  @Post()
  async create(
    @Body() lesson: Lesson,
    @CurrentUser() user: User,
  ): Promise<Lesson> {
    return this.lessonService.create(lesson, user);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() lesson: Lesson,
    @CurrentUser() user: User,
  ): Promise<Lesson> {
    return this.lessonService.update(id, lesson, user);
  }

  @Delete(':id')
  async delete(
    @Param('id') id: string,
    @CurrentUser() user: User,
  ): Promise<void> {
    return this.lessonService.delete(id, user);
  }
}
