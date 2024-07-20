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
import { SubjectService } from './subjects.service';
import { Subject } from './subjects.entity';
import { AuthGurad } from '../gurads/auth.gurad';
import { CurrentUser } from '../decorators/current-user.decorator';
import { User } from '../users/users.entity';

@UseGuards(AuthGurad)
@Controller('subjects')
export class SubjectsController {
  constructor(private readonly subjectService: SubjectService) {}

  @Get()
  async findAll(@CurrentUser() user: User): Promise<Subject[]> {
    return this.subjectService.findAll(user);
  }

  @Get('/config')
  async getConfig(): Promise<any> {
    return this.subjectService.getSubjectsConfig();
  }

  @Get(':id')
  async findById(
    @Param('id') id: string,
    @CurrentUser() user: User,
  ): Promise<Subject> {
    return this.subjectService.findById(id, user);
  }

  @Post()
  async create(
    @Body() subject: Subject,
    @CurrentUser() user: User,
  ): Promise<Subject> {
    console.log('idssss', user);
    return this.subjectService.create(subject, user);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() subject: Subject,
    @CurrentUser() user: User,
  ): Promise<Subject> {
    console.log('id', user);
    return this.subjectService.update(id, subject, user);
  }

  @Delete(':id')
  async delete(
    @Param('id') id: string,
    @CurrentUser() user: User,
  ): Promise<void> {
    return this.subjectService.delete(id, user);
  }
}
