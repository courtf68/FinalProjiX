import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Feedback } from 'src/app/models/feedback';

@Injectable({
  providedIn: 'root'
})

export class FeedbackService {
  url: string = 'http://localhost:4200';

  constructor(private http: HttpClient) {} 

  addFeedbackToDb(feedback: Feedback) {
    this.http
      .post(this.url + '/feed/feedback', {
        id: feedback.id,
        content: feedback.content,
      })
      .subscribe((postResponse) => {
        console.log(postResponse);
      });
  } 


getFeedback() {
  return this.http.get(this.url + '/feed/feedback').toPromise();
} 

updateFeedbackOnDb(feedback: Feedback) {
  this.http.put(this.url + '/feed/' + feedback.id, {
    id: feedback.id,
    content: feedback.content
  }).toPromise();
} 
deleteFeedbackOnDb(feedback: Feedback) {
  const deleteUrl = this.url + '/feed/' + feedback.id;
  return this.http.delete(deleteUrl).toPromise();
}
}