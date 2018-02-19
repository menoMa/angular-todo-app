import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { TodoItem } from '../interface/todo-item';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  // 詳細入力フォームが表示されているか
  public hasDetail = false;
  // アイテムリスト
  public itemList: Array<TodoItem> = new Array<TodoItem>();
  // 入力フォーム
  public todoForm: FormGroup;

  constructor(protected formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm(): void {
    // Form の作成と初期値設定をします。
    this.todoForm = this.formBuilder.group({
      title: [
        '', [Validators.required]
      ],
      description: [''],
      date: [''],
      isComplete: [false]
    });
  }

  // todoItem を 保存します
  onSaveTodoItem(): void {
    const item: TodoItem = {
      title: this.todoForm.get('title').value,
      isComplete: false,
      description: null,
      date: null
    };

    if (this.hasDetail) {
      item.description = this.todoForm.get('description').value;
      item.date = this.todoForm.get('date').value;
    }

    this.itemList.push(item);
    this.clearForm();
  }

  // フォームの値をリセット
  clearForm(): void {
    this.todoForm.reset();
  }

  // 指定した要素を削除
  onDeleteItem(item: TodoItem): void {
    this.itemList = this.itemList.filter(i => i !== item);
  }
}
