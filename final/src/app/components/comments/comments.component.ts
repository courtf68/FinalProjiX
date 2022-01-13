import { Component, Input, OnInit } from '@angular/core';
import { comForm } from 'src/app/models/comments';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input() receivedId?:string;

  entry: comForm = new comForm();
  submitted: boolean = false; 

  onSubmit() { 
    this.submitted = true;
    this.entry = new comForm; //reset form

  }
  constructor() { }

  ngOnInit(): void {
  }

}
