import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks() {
    return this.tasksService.getAllTasks();
  }

  @Post()
  createTask(@Body() newTask: CreateTaskDto) {
    return this.tasksService.createTask(newTask.title, newTask.description);
  }

  @Get(':id')
  getTask(@Param('id') id: string) {
    return this.tasksService.getTask(id);
  }

  @Put(':id')
  updateTask(@Param('id') id: string, @Body() updateTaskFields: UpdateTaskDto) {
    return this.tasksService.updateTask(id, updateTaskFields);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    return this.tasksService.deleteTask(id);
  }
}
