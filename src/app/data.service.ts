import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  auth(data) {
    return this.http.post('http://localhost:3000/accounts/authenticate', data);
  }

  getCourses() {
    return this.http.get('https://api.balta.io/v1/courses');
  }
  getProdutos() {
    return this.http.get('http://localhost:3000/produtos');
  }
}
