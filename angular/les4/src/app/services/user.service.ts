import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {configs} from '../config/config';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(
    private http: HttpClient
  ) {
  }

  user = new BehaviorSubject({});

  createUser(userObject): Observable<any> {
    return this.http.post(`${configs.HOST}/users`, userObject);
  }

  getPosts(): Observable<any> {
    return this.http.get(`${configs.HOST}/users`);
  }

  getSinglePost(id: number): Observable<any> {
    return this.http.get(`${configs.HOST}/users/${id}`);
  }

  sendToken(): Observable<any> {
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders()
      .set('Authorization', token);

    console.log(token);
    return this.http.get(`${configs.HOST}/users/lala`, {headers});
  }
}
