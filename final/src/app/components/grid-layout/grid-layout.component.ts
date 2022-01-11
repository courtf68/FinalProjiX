import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-grid-layout',
  templateUrl: './grid-layout.component.html',
  styleUrls: ['./grid-layout.component.css']
})
export class GridLayoutComponent implements OnInit {

  project:Project = new Project();

  projectObjects:Project[] = [{id:1, title:"Project 1"}, {id:2, title:"Project 2"}, {id:3, title:"Project 3"}];

  constructor() { }

  ngOnInit(): void {
  }

}
