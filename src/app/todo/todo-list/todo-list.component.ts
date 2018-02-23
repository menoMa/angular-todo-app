import { Component, OnInit, Input } from '@angular/core';

import { TodoItem } from '../interface/todo-item';
import { TodoService } from '../../common/service/todo.service';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input()
  todo: TodoItem;

  isEdit = false;
  isOpend = false;

  constructor(
    protected todoService: TodoService
  ) { }

  ngOnInit() {
  }


  // 完了/未完了の状態を更新
  updateIsComplete(item: TodoItem): void {
    item.isComplete = !item.isComplete;
    this.todoService.updateTodo(item);
  }

  // 指定した要素を削除
  onDeleteItem(item: TodoItem): void {
    this.todoService.deleteTodo(item._id);
  }
}
