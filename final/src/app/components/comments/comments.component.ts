import { Comment } from 'src/app/models/comment';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/models/project';
import { CommentsService } from 'src/app/services/comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input() index:number =0;
  projects: Project[] = [{id:'Victor', title:"Project 1"}, {id:"Courtney", title:"Project 2"}, {id:"Cameron", title:"Project 3"}];

  comment:Comment = new Comment();
  comments:Comment[] = [];
  editing: boolean = false;

  constructor(private router: Router, private commentService:CommentsService) { }

  ngOnInit(): void {
  }

  nextClicked(){
    this.router.navigate(['contact']);
  }

  async addComments(){
    await this.commentService.addCommentsToDb(this.comment);
    this.comments.push(this.comment);
    this.comment = new Comment();  
  }

    async fetchComment(){
      this.comments = []

      let res: any = await this.commentService.getComments();

      for (let i = 0; i<res.length; i++){
        const comment = new Comment();

        comment.id = res.posts[i]._id;
        comment.content = res.posts[i].content;
        this.comments.push(comment);
      }
    }

  editComment(comment: Comment){
    this.editing = true;
    this.comment = comment;
  }

  async updateComment(){
    await this.commentService.updateCommentsOnDb(this.comment);
    this.comment = new Comment();
  }

  async deleteComment(comment: Comment){
    await this.commentService.deleteCommentsOnDb(comment);
    this.comments = this.comments?.filter((x)=> x.id != comment.id);
  }

}
