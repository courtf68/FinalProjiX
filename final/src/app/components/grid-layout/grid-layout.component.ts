import { NonNullAssert } from '@angular/compiler';
import { SimplePlaceholderMapper } from '@angular/compiler/src/i18n/serializers/serializer';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-grid-layout',
  templateUrl: './grid-layout.component.html',
  styleUrls: ['./grid-layout.component.css']
})
export class GridLayoutComponent implements OnInit {

  //@input projects
  //@Input() projects?:Project[];

  //length = this.projects?.length;

  index:number = 0;

  project:Project = new Project();

  projects: Project[] = [{id:'Victor', title:"Project 1"}, {id:"Courtney", title:"Project 2"}, {id:"Cameron", title:"Project 3"}];

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

 
  clickPrev(){
    if (this.projects != null){
      if (this.index == 0){
        this.index = this.projects.length-1;
      }else{
        this.index-=1;
      }
    }
  }

  clickNext(){
    if (this.projects != null){
      if (this.index == this.projects.length-1){
        this.index=0;
      }else{
        this.index+=1;
      }
    }
  }
}
