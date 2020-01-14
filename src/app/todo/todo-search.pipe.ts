import { Pipe, PipeTransform } from '@angular/core';
import { ITodo } from './iToDo';
 
@Pipe({ name: 'todoSearch' })
export class TodoSearchPipe implements PipeTransform {
  transform(todos: ITodo[], searchText: string) {
    return todos.filter(todo => todo.task.toLowerCase().includes(searchText.toLowerCase()));
  }
}