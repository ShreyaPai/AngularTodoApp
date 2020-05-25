import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TodoModel } from '../models/todo.model';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  url = 'https://jsonplaceholder.typicode.com/todos?_limit=5';
  // limit = '';

  constructor(private http: HttpClient) {}

  addTodo(todo: TodoModel) {
    return this.http.post<TodoModel>(this.url, todo, httpOptions);
  }

  getTodoList(): Observable<TodoModel[]> {
    return this.http.get<TodoModel[]>(this.url);
  }

  isComplete(todo: TodoModel): Observable<any> {
    const url = `${this.url}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);
  }

  deleteTodo(todo: TodoModel): Observable<TodoModel> {
    const url = `${this.url}/${todo.id}`;
    return this.http.delete<TodoModel>(url, httpOptions);
  }
}
