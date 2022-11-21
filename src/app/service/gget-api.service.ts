import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GgetApiService {

  constructor(private http: HttpClient) { }

  url: string = 'https://jsonplaceholder.typicode.com/users';

  users(): Observable<any> {
    return this.http.get(this.url);
    // return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

}
