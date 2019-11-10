import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HouseService {

  constructor(
    private http: HttpClient
  ) {
  }

  getPosts(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  getSinglePost(id: number): Observable<any> {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
}
