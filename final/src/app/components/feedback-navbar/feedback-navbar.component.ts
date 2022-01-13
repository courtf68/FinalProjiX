import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback-navbar',
  templateUrl: './feedback-navbar.component.html',
  styleUrls: ['./feedback-navbar.component.css']
})
export class FeedbackNavbarComponent implements OnInit {

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  feedbackClicked(){
    this.router.navigate(['feedback']);
  }

  commentClicked(){
    this.router.navigate(['comment']);
  }

  contactClicked(){
    this.router.navigate(['contact']);
  }

  historyClicked(){
    this.router.navigate(['history']);
  }

}
