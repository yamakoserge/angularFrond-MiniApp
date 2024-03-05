import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASIC_URL = 'http://localhost:8090/';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  createComment(userId:number, postedBY: string, content:string) :Observable<any>{
    const params = {
      userId: userId,
      postedBY: postedBY
    }

    return this.http.post<any>(BASIC_URL + 'api/comments/create', content, {params});
  }

  getAllCommentsByPost(userId:number):Observable<any>{
    return this.http.get(BASIC_URL+`api/comments/${userId}`);
  }
}
