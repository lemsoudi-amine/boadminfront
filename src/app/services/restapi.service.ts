import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class RestapiService {
  constructor(private httpClient: HttpClient) { }

  public login(username: string, password: string) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.get('http://localhost:8080/', {headers, responseType: 'text' as 'json'});
  }

  public getUsers() {
    const username = 'lemsoudi';
    const password = '1111';
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.get('http://localhost:8080/users', {headers});
  }
}

