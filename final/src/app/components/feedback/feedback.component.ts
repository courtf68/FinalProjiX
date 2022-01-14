import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Feedback } from 'src/app/models/feedback';
import { Project } from 'src/app/models/project';
import { GridLayoutComponent } from '../grid-layout/grid-layout.component';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit{

  @Input() receivedIndex?:number;
  @Input() projects?:Project[];

  feedback?:Feedback = new Feedback();
  feedbacks?:Feedback[] = [];
  editing: boolean = false;

  constructor(private router:Router, private feedbackService: FeedbackService) { }

  ngOnInit(): void {
    this.projects = [{id:'Victor', title:"Project 1"}, {id:"Courtney", title:"Project 2"}, {id:"Cameron", title:"Project 3"}];
  }

  nextClicked(){
    this.router.navigate(['comment']);
  }

  async addFeedback(){
    await this.feedbackService.addFeedbackToDb(this.feedback);
    this.feedbacks.push(this.feedback);
    this.feedback = new Feedback();  
  }

    async fetchFeedback(){
      this.feedbacks = []

      let res: any = await this.feedbackService.getFeedbacks();

      for (let i = 0; i<res.feedbacks.length; i++){
        const feedback = new Feedback();

        feedback.id = res.feedbacks[i]._id;
        feedback.content = res.feedbacks[i].content;
        feedback.createdAt = res.feedbacks[i].createdAt;
        feedback.updatedAt = res.feedbacks[i].updatedAt;

        this.feedbacks.push(feedback);
      }
    }


  viewFeedback(){

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
    await this.feedbackService.deletFeedbackOnDb(feedback);
    this.feedbacks = this.feedbacks?.filter((x)=> x.id != feedback.id);
  }
}
