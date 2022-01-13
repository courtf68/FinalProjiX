import { Component, Input, OnInit } from '@angular/core';
import { feedForm } from 'src/app/models/feedback';
import { Project } from 'src/app/models/project';
import { GridLayoutComponent } from '../grid-layout/grid-layout.component';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit{

  @Input() receivedId?:string;

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
