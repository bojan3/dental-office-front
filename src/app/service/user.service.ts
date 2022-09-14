import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpOptions = {
    headers : new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getMyInfo(phoneNumber: string) : Observable<any>{
    return this.http.get<String>("http://localhost:8080/api/user/" + phoneNumber);
  }
}
