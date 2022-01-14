import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/projects';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements OnInit {

  projects?:Project[] = [{id:'Victor', title:"Project 1"}, {id:"Courtney", title:"Project 2"}, {id:"Cameron", title:"Project 3"}];;

  constructor() { }

  ngOnInit(): void {
  }
}
