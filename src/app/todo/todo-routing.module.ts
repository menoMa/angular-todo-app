import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoComponent } from './todo/todo.component';

// ページ遷移のパスとコメンポーネントのペアを定義します。
const routes: Routes = [
  { path: 'todo', component: TodoComponent }
];

/**
 * TodoModule用のルーティングモジュールです
 */
@NgModule({
  // forChild()で既にあるルーティングサービスに新規ルートを追加します
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
