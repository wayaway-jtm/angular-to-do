import { Component, OnInit } from '@angular/core';
import { ITodo, ToDoTask } from './todo'
import { compileNgModule } from '@angular/compiler';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  tasks: ToDoTask[] = [new ToDoTask('Get groceries'),
  new ToDoTask('Change litterboxes', true),
  new ToDoTask('Feed rabbit', true),
  new ToDoTask('Clean bathroom'),
  new ToDoTask('Do laundry', true),
  new ToDoTask('Fold clothes'),
  new ToDoTask('Work on homework', true),
  new ToDoTask('Sort out insurance stuff')];;

  constructor() {

  }

  ngOnInit() {
  }
}