import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CurrentUser } from '../decorators/current-user.decorator';
import { User } from '../users/users.entity';
import { GradesService } from './grades.service';
import { Grade } from './grades.entity';

@Controller('grades')
export class GradesController {
  constructor(private readonly gradesService: GradesService) {}

  @Get()
  async findAll(@CurrentUser() user: User): Promise<Grade[]> {
    const res = await this.gradesService.findAll(user);
    console.log('res', res);
    return res;
  }

  @Get(':id')
  async findById(
    @Param('id') id: string,
    @CurrentUser() user: User,
  ): Promise<Grade> {
    return this.gradesService.findById(id, user);
  }

  @Post()
  async create(
    @Body() grades: Grade[],
    @CurrentUser() user: User,
  ): Promise<Grade[]> {
    const existingGrades = await this.gradesService.findAll(user);
    const uniqueGrades = grades.filter((grade) => {
      return !existingGrades.some(
        (existingGrade) => existingGrade.grade === grade.grade,
      );
    });
    console.log('uniqueGrades', user, grades, uniqueGrades);
    return this.gradesService.create(uniqueGrades, user);
  }
}
