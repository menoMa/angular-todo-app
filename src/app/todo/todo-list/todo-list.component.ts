import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { TodoItem } from '../interface/todo-item';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input()
  todo: TodoItem;
  @Output()
  updateTodoState = new EventEmitter();
  @Output()
  deleteTodo = new EventEmitter();

  isEdit = false;
  isOpend = false;

  constructor(
  ) { }

  ngOnInit() {
  }


  // 完了/未完了の状態を更新
  updateIsComplete(item: TodoItem): void {
    item.isComplete = !item.isComplete;
    this.updateTodoState.emit(item);
  }

  // 指定した要素を削除
  onDeleteItem(item: TodoItem): void {
    this.deleteTodo.emit(item);
  }
}
