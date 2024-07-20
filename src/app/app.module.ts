import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeachersModule } from '../teachers/teachers.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subject } from '../subjects/subjects.entity';
import { Group } from '../groups/groups.entity';
import { Lesson } from '../lessons/lessons.entity';
import { Teacher } from '../teachers/teachers.entity';
import { GroupsModule } from '../groups/groups.module';
import { SubjectsModule } from '../subjects/subjects.module';
import { LessonsModule } from '../lessons/lessons.module';
import { UsersModule } from '../users/users.module';
import { User } from 'src/users/users.entity';
import { CurrentUserMiddleware } from '../middlewares/current-user.middleware';
import { UsersService } from '../users/users.service';
import { GradesModule } from '../grades/grades.module';
import { Grade } from '../grades/grades.entity';

@Module({
  imports: [
    UsersModule,
    TeachersModule,
    GroupsModule,
    SubjectsModule,
    LessonsModule,
    GradesModule,
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'newuser',
      password: 'password',
      database: 'postgres',
      entities: [Subject, Group, Lesson, Teacher, User, Grade],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, UsersService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CurrentUserMiddleware).forRoutes('*');
  }
}
