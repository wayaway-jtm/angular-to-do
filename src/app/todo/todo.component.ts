import { Component, OnInit, Input } from '@angular/core';
import { ITodo } from './iTodo'
import { compileNgModule } from '@angular/compiler';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit, ITodo {

  @Input() task: string;
  @Input() completed: boolean;

  constructor() {
    // this.task = taskName;
    // this.completed = isComplete;
  }

  ngOnInit() {
  }

  completeTask() {
    this.completed = true;
  }
}