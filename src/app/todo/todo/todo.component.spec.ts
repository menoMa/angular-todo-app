import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { CollapseModule } from 'ngx-bootstrap/collapse';

import { TodoComponent } from './todo.component';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { MOCK_TODO_SERVICE } from '../../common/mock/mock-todo.service';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TodoComponent,
        TodoListComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        CollapseModule
      ],
      providers: [
        MOCK_TODO_SERVICE
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
