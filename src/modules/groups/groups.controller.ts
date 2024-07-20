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
import { Group } from './groups.entity';
import { GroupsService } from './groups.service';
import { AuthGurad } from '../gurads/auth.gurad';
import { CurrentUser } from '../decorators/current-user.decorator';
import { User } from '../users/users.entity';

@UseGuards(AuthGurad)
@Controller('groups')
export class GroupsController {
  constructor(private readonly subjectGroupService: GroupsService) {}

  @Get()
  async findAll(@CurrentUser() user: User): Promise<Group[]> {
    return this.subjectGroupService.findAll(user);
  }

  @Get(':id')
  async findById(
    @Param('id') id: string,
    @CurrentUser() user: User,
  ): Promise<Group> {
    return this.subjectGroupService.findById(id, user);
  }

  @Post()
  async create(
    @Body() subjectGroup: Group,
    @CurrentUser() user: User,
  ): Promise<Group> {
    return this.subjectGroupService.create(subjectGroup, user);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() subjectGroup: Group,
    @CurrentUser() user: User,
  ): Promise<Group> {
    return this.subjectGroupService.update(id, subjectGroup, user);
  }

  @Delete(':id')
  async delete(
    @Param('id') id: string,
    @CurrentUser() user: User,
  ): Promise<void> {
    return this.subjectGroupService.delete(id, user);
  }
}
