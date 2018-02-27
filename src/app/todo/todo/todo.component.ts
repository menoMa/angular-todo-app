import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 *  Todoオブジェクト
 */
interface TodoItem {
  /** 件名 */
  title: string;
  /** 詳細 */
  description: string;
  /** 完了/未完了 状態 */
  isComplete: boolean;
  /** 締切日時 */
  date: string;
}

/**
 * ToDoアプリのロジックを定義します
 */
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  // 詳細入力フォームが表示されているか
  public hasDetail = false;
  // ToDoリスト
  public itemList: Array<TodoItem> = new Array<TodoItem>();
  // 入力フォームの状態
  public todoForm: FormGroup;

  constructor(
    // 入力フォームの状態管理オブジェクト（FormGroup）を生成するためのビルダーです
    protected formBuilder: FormBuilder
  ) { }

  /**
   * 初期化時に呼び出されるメソッドです
   * ngOnInitはconstructorの後に呼び出されます
   */
  ngOnInit() {
    this.createForm();
  }

  /**
   * Form の作成と初期値設定をします
   */
  createForm(): void {
    this.todoForm = this.formBuilder.group({
      title: [
        '', [Validators.required]
      ],
      description: [''],
      date: [''],
      isComplete: [false]
    });
  }

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

  clearForm(): void {
    this.todoForm.reset();
  }

  onDeleteItem(item: TodoItem): void {
    this.itemList = this.itemList.filter(i => i !== item);
  }
}
