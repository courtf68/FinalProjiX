import { SimplePlaceholderMapper } from '@angular/compiler/src/i18n/serializers/serializer';
import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-grid-layout',
  templateUrl: './grid-layout.component.html',
  styleUrls: ['./grid-layout.component.css']
})
export class GridLayoutComponent implements OnInit {

  index:number = 0;

  project:Project = new Project();

  projectObjects:Project[] = [{id:'Victor', title:"Project 1"}, {id:"Courtney", title:"Project 2"}, {id:"Cameron", title:"Project 3"}];

  constructor() { }

  ngOnInit(): void {
  }

 
  clickPrev(){
    if (this.index == 0){
      this.index = this.projectObjects.length-1;
    }else{
      this.index-=1;
    }
  }

  clickNext(){
    if (this.index == this.projectObjects.length-1){
      this.index=0;
    }else{
      this.index+=1;
    }
  }

}
