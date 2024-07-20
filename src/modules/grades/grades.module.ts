import { Module } from '@nestjs/common';
import { GradesController } from './grades.controller';
import { GradesService } from './grades.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Grade } from './grades.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Grade])],
  controllers: [GradesController],
  providers: [GradesService],
})
export class GradesModule {}
