import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// パスを定義します。ここでは/todoにリダイレクトするように設定しています。
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/todo'
  }
];

/**
 * アプリのルーティングモジュールです。
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
