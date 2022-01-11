import { Component, OnInit } from '@angular/core';
import { feedForm } from 'src/app/models/feedback';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  
  entry: feedForm = new feedForm();
  submitted: boolean = false; 

  onSubmit() { 
    this.submitted = true;
    this.entry = new feedForm; //reset form

  }
  constructor() { }

  ngOnInit(): void {
  }

}
