import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AccordionModule } from 'ngx-bootstrap/accordion';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CollapseModule.forRoot(),
    AccordionModule.forRoot(),
    TodoRoutingModule
  ],
  declarations: [TodoComponent]
})
export class TodoModule { }
