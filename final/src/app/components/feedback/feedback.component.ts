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

  feedback?:Feedback;
  feedbacks?:Feedback[] = [];

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.projects = [{id:'Victor', title:"Project 1"}, {id:"Courtney", title:"Project 2"}, {id:"Cameron", title:"Project 3"}];
  }

  nextClicked(){
    this.router.navigate(['comment']);
  }

  viewFeedback(){

  }

  editFeedback(feedback: Feedback){

  }

  deleteFeedback(feedback:Feedback){

  }
}
