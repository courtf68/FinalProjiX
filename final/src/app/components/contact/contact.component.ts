import { Component, OnInit } from '@angular/core';
import { conForm } from 'src/app/models/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  entry: conForm = new conForm();
  submitted: boolean = false; 

  onSubmit() { 
    this.submitted = true;
    this.entry = new conForm; //reset form

  }
  constructor() { }

  ngOnInit(): void {
  }

}
