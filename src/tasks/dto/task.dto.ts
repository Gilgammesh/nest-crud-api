import { TaskStatus } from '../task.entity';
import { IsNotEmpty, IsString, IsOptional, IsIn } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  title: string;
  @IsString()
  description: string;
}

export class UpdateTaskDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  title?: string;
  @IsString()
  @IsOptional()
  description?: string;
  @IsString()
  @IsNotEmpty()
  @IsIn([TaskStatus.PENDING, TaskStatus.IN_PROGRESS, TaskStatus.DONE])
  @IsOptional()
  status?: TaskStatus;
}
