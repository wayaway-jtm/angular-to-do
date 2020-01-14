import { Component } from '@angular/core';
import { ITodo } from './todo/iToDo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: ITodo[] = [{ task: 'Get groceries', completed: false },
  { task: 'Change litterboxes', completed: true },
  { task: 'Feed rabbit', completed: true },
  { task: 'Clean bathroom', completed: false },
  { task: 'Do laundry', completed: true },
  { task: 'Fold clothes', completed: false },
  { task: 'Work on homework', completed: true },
  { task: 'Sort out insurance stuff', completed: false }];
  title = 'angular-to-do';

  addNewTodo(todoName: string) {
    this.todos.push({ task: todoName, completed: false });
  }
}
