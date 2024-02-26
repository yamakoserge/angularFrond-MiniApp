import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



const BASE_URL = "http://localhost:8090";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http : HttpClient){}

  createNewPost(data:any):Observable<any>{
    return this.http.post(BASE_URL + 'api/users', data);
  }

  getAllUser():Observable<any>{
    return this.http.get(BASE_URL + 'api/users');
  }

  getUserById(userId:number):Observable<any>{
    return this.http.get(BASE_URL + 'api/users/${userId}');
  }
}
