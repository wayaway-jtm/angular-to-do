import { Component, OnInit } from '@angular/core';
import { ITodo } from './iTodo'
import { compileNgModule } from '@angular/compiler';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  tasks: ITodo[] = [{ task: 'Get groceries', completed: false },
  { task: 'Change litterboxes', completed: true },
  { task: 'Feed rabbit', completed: true },
  { task: 'Clean bathroom', completed: false },
  { task: 'Do laundry', completed: true },
  { task: 'Fold clothes', completed: false },
  { task: 'Work on homework', completed: true },
  { task: 'Sort out insurance stuff', completed: false }];;

  constructor() {

  }

  ngOnInit() {
  }

  completeTask(task: ITodo) {
    task.completed = true;
  }
}