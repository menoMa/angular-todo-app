import { TodoItem } from '../../todo/interface/todo-item';
import { TodoService } from '../service/todo.service';
/**
 * todoリストを管理するサービス
 */
export class MockTodoService {

    todoList = new Array<TodoItem>();
    nextId = this.todoList.length;
    constructor(
    ) { }

    private baseUrl = 'http://localhost:3000/api/v1/todo/';

    // TodoリストをDBから取得する
    fetchAll(): Promise<any> {
        const url = this.baseUrl;
        return Promise.resolve(this.todoList);
    }

    // todoを作成してDBに登録する
    createTodo(todo: TodoItem): Promise<any> {
        todo._id = String(this.nextId);
        this.todoList.push(todo);
        this.nextId++;
        return Promise.resolve({
            message: 'succcess'
        });
    }

    // todo を更新する
    updateTodo(todo: TodoItem): Promise<any> {
        let buf = this.todoList.find((t) => t._id === todo._id);
        buf = todo;

        return Promise.resolve({ message: 'success' });
    }

    // todoを削除する
    deleteTodo(todoId: string): Promise<any> {
        this.todoList = this.todoList.filter(t => t._id !== todoId);
        return Promise.resolve({ message: 'success' });
    }
}

export const MOCK_TODO_SERVICE = {
    provide: TodoService,
    useClass: MockTodoService
};
