import { Comment } from 'src/app/models/comment';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input() receivedId?:string;

  comment?:Comment = new Comment();
  comments?:Comment[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  nextClicked(){
    this.router.navigate(['contact']);
  }

  viewComments(){

  }

  editComment(comment: Comment){

  }

  deleteComment(comment: Comment){

  }

}
