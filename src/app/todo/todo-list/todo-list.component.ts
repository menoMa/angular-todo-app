import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  public todoEdit: FormGroup;

  isEdit = false;
  isOpend = false;

  constructor(
    protected formBuilder: FormBuilder
  ) { }

  ngOnInit() {

  }

  createForm(): void {
    // if (this.todoEdit) {
    //   return;
    // }

    this.todoEdit = this.formBuilder.group({
      title: [
        this.todo.title, [Validators.required]
      ],
      description: [this.todo.description],
      date: [this.todo.date]
    });
  }

  // 完了/未完了の状態を更新
  updateIsComplete(): void {
    this.todo.isComplete = !this.todo.isComplete;
    this.updateTodoState.emit(this.todo);
  }

  // 指定した要素を削除
  onDeleteItem(): void {
    this.deleteTodo.emit(this.todo);
  }

  onChangeEdit(): void {
    if (!this.isEdit) {
      this.createForm();
    }

    this.isEdit = !this.isEdit;
  }

  // todoを編集内容に更新する
  onEditTodo(): void {
    this.isEdit = false;
    this.todo.title = this.todoEdit.get('title').value;
    this.todo.description = this.todoEdit.get('description').value;
    this.todo.date = this.todoEdit.get('date').value;

    this.updateTodoState.emit(this.todo);
  }
}
