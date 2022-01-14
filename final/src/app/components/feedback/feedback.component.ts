import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Feedback } from 'src/app/models/feedback';
import { Project } from 'src/app/models/project';
import { FeedbackService } from 'src/app/services/feedback.service';
import { GridLayoutComponent } from '../grid-layout/grid-layout.component';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit{

  @Input() index:number = 0;
  
  projects:Project[] = [{id:'Victor', title:"Project 1"}, {id:"Courtney", title:"Project 2"}, {id:"Cameron", title:"Project 3"}];

  feedback:Feedback = new Feedback();
  feedbacks:Feedback[] = [];
  editing: boolean = false;

  constructor(private router:Router, private feedbackService: FeedbackService) { }

  ngOnInit(): void {
  }

  nextClicked(){
    this.router.navigate(['comment']);
  }

  async addFeedback(){
    this.feedback.id = this.projects[this.index].title;
    await this.feedbackService.addFeedbackToDb(this.feedback);
    this.feedbacks.push(this.feedback);
    console.log(this.feedback);
    this.feedback = new Feedback();  
  }

    async fetchFeedback(){
      this.feedbacks = []

      let res: any = await this.feedbackService.getFeedback();
      console.log('This is the res from feedback call', res);

      for (let i = 0; i<res.posts.length; i++){
        const feedback = new Feedback();

        feedback.id = res.posts[i]._id;
        feedback.content = res.posts[i].content;

        this.feedbacks.push(feedback);
      }
    }

  editFeedback(feedback: Feedback){
    this.editing = true;
    this.feedback = feedback;
  }

  async updateFeedback(){
    await this.feedbackService.updateFeedbackOnDb(this.feedback);
    this.feedback = new Feedback();
  }

  async deleteFeedback(feedback:Feedback){
    await this.feedbackService.deleteFeedbackOnDb(feedback);
    this.feedbacks = this.feedbacks?.filter((x)=> x.id != feedback.id);
  }
}
