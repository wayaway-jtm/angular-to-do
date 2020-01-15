import { Component } from '@angular/core';
import { ITodo } from './todo/iToDo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  filterText: string = '';
  newTodoName: string = '';

  todos: ITodo[] = [{ task: 'Get groceries', completed: false },
  { task: 'Change litterboxes', completed: true },
  { task: 'Feed rabbit', completed: true },
  { task: 'Clean bathroom', completed: false },
  { task: 'Do laundry', completed: true },
  { task: 'Fold clothes', completed: false },
  { task: 'Work on homework', completed: true },
  { task: 'Return empty cans & bottles', completed: false }];
  title = 'angular-to-do';

  addNewTodo() {
    // filtering
    if (this.newTodoName !== "") {
      this.todos = [...this.todos, { task: this.newTodoName, completed: false }];
    }
    // clear input
    this.newTodoName = '';
  }

  removeTodo(taskToRemove: ITodo) {
    this.todos = this.todos.filter(t => t !== taskToRemove);
  }
}
