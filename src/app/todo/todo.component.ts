import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  tasks: ToDoTask[];

  constructor() {
    this.tasks = [new ToDoTask('Get groceries'),
    new ToDoTask('Change litterboxes', true),
    new ToDoTask('Feed rabbit', true),
    new ToDoTask('Clean bathroom'),
    new ToDoTask('Do laundry', true),
    new ToDoTask('Fold clothes'),
    new ToDoTask('Work on homework', true),
    new ToDoTask('Sort out insurance stuff')];
  }

  ngOnInit() {
  }

}

interface ITodo {
  task: string;
  completed: boolean;
}

class ToDoTask implements ITodo {
  task: string;
  completed: boolean;

  constructor(taskName, isComplete = false) {
    this.task = taskName;
    this.completed = isComplete;
  }
}
