import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';
import { v4 as uuid4 } from 'uuid';
import { UpdateTaskDto } from './dto/task.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [
    {
      id: '8feb51eb-9faa-4ed2-a0e4-53c09e028080',
      title: 'Tarea A',
      description: 'Descripción de la tarea A',
      status: TaskStatus.PENDING,
    },
    {
      id: '6dab3d56-6b25-46d1-b654-a27a2af5301c',
      title: 'Tarea B',
      description: 'Descripción de la tarea B',
      status: TaskStatus.PENDING,
    },
  ];

  getAllTasks() {
    return this.tasks;
  }

  createTask(title: string, description: string) {
    const task: Task = {
      id: uuid4(),
      title,
      description,
      status: TaskStatus.PENDING,
    };
    this.tasks.push(task);
    return task;
  }

  getTask(id: string) {
    const task = this.tasks.find((ele) => ele.id === id);
    return task;
  }

  updateTask(id: string, updateTaskFields: UpdateTaskDto) {
    const newTasks = this.tasks.map((ele) => {
      if (ele.id === id) {
        return {
          ...ele,
          ...updateTaskFields,
        };
      }
      return ele;
    });
    this.tasks = newTasks;
    return this.getTask(id);
  }

  deleteTask(id: string) {
    const newTasks = this.tasks.filter((ele) => ele.id !== id);
    this.tasks = newTasks;
    return `Deleted task ${id}`;
  }
}
