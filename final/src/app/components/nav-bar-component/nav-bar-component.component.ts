import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar-component',
  templateUrl: './nav-bar-component.component.html',
  styleUrls: ['./nav-bar-component.component.css']
})
export class NavBarComponentComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  
  navHome(){
    this.router.navigate(['']);
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
