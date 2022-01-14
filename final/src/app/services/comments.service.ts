import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comment } from 'src/app/models/comment';

@Injectable({
  providedIn: 'root'
})

export class CommentsService {
  url: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {} 

  addCommentsToDb(comment: Comment) {
    this.http
      .post(this.url + '/comment/comments', {
        id: comment.id,
        content: comment.content,
      })
      .subscribe((postResponse) => {
        console.log(postResponse);
      });
  } 


getComments() {
  return this.http.get(this.url + '/comment/comments').toPromise();
} 

updateCommentsOnDb(comment: Comment) {
  this.http.put(this.url + '/comment/' + comment.id, {
    id: comment.id,
    content: comment.content
  }).toPromise();
} 
deleteCommentsOnDb(comment: Comment) {
  const deleteUrl = this.url + '/comment/' + comment.id;
  return this.http.delete(deleteUrl).toPromise();
}
}


