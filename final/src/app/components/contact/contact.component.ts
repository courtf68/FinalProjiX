import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Input() receivedId?:string;

  contact?:Contact = new Contact();
  contacts?:Contact[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){

  }

  viewContact(){
    
  }

  editContact(contact:Contact){

  }

  deleteContact(contact:Contact){

  }

}
