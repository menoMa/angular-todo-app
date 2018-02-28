import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoService } from '../../common/service/todo.service';

import { TodoItem } from '../interface/todo-item';
import { importType } from '@angular/compiler/src/output/output_ast';

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

  constructor(
    protected formBuilder: FormBuilder,
    protected todoService: TodoService
  ) { }

  ngOnInit() {
    this.createForm();
    this.todoService.fetchAll()
      .then(list => this.itemList = list);
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
      _id: null,
      title: this.todoForm.get('title').value,
      isComplete: false,
      description: null,
      date: null
    };

    if (this.hasDetail) {
      item.description = this.todoForm.get('description').value;
      item.date = this.todoForm.get('date').value;
    }

    this.todoService.createTodo(item).then((data) => {
      console.log(data);
      item._id = data.id;

      this.itemList.push(item);
      this.clearForm();
    });
  }

  // 完了/未完了の状態を更新
  onUpdateTodo(item: TodoItem): void {
    this.todoService.updateTodo(item);
  }

  // フォームの値をリセット
  clearForm(): void {
    this.todoForm.reset();
  }

  // 指定した要素を削除
  onDeleteItem(item: TodoItem): void {
    this.todoService.deleteTodo(item._id);
    this.itemList = this.itemList.filter(todo => todo !== item);
  }
}
