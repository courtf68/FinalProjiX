import { Comment } from 'src/app/models/comment';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input() receivedId?:string;
  @Input() projects?: Project[];

  comment?:Comment = new Comment();
  comments?:Comment[] = [];
  editing: boolean = false;

  constructor(private router: Router, private commentService: CommentsService) { }

  ngOnInit(): void {
    this.projects = [{id:'Victor', title:"Project 1"}, {id:"Courtney", title:"Project 2"}, {id:"Cameron", title:"Project 3"}];
  }

  nextClicked(){
    this.router.navigate(['contact']);
  }

  async addComments(){
    await this.commentService.addCommentsToDb(this.comment);
    this.comments.push(this.comment);
    this.comment = new Comment();  
  }

    async fetchFeedback(){
      this.comments = []

      let res: any = await this.commentService.getComments();

      for (let i = 0; i<res.comments.length; i++){
        const comment = new Comment();

        comment.id = res.comments[i]._id;
        comment.content = res.comments[i].content;
        comment.createdAt = res.commenyts[i].createdAt;
        comment.updatedAt = res.comments[i].updatedAt;

        this.comments.push(comment);
      }
    }

  viewComments(){

  }

  editComment(comment: Comment){
    this.editing = true;
    this.comment = comment;
  }

  async updateComment(){
    await this.commentService.updateCommentOnDb(this.comment);
    this.comment = new Comment();
  }

  async deleteComment(comment: Comment){
    await this.commentService.deletFeedbackOnDb(comment);
    this.comments = this.comments?.filter((x)=> x.id != comment.id);
  }

}
