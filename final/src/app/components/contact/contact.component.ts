import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/models/contact';
import { Project } from 'src/app/models/project';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Input() index:number = 0;
  projects:Project[] = [{id:'Victor', title:"Project 1"}, {id:"Courtney", title:"Project 2"}, {id:"Cameron", title:"Project 3"}];

  contact:Contact = new Contact();
  contacts:Contact[] = [];
  editing: boolean = false;

  constructor(private router:Router, private contactService: ContactService) { }

  ngOnInit(): void {
  }

  async addContact(){
    await this.contactService.addContactToDb(this.contact);
    this.contacts.push(this.contact);
    this.contact = new Contact();  
  }

    async fetchContact(){
      this.contacts = []

      let res: any = await this.contactService.getContact();

      for (let i = 0; i<res.contacts.length; i++){
        const contact = new Contact();

        contact.id = res.contacts[i]._id;
        contact.content = res.contacts[i].content;

        this.contacts.push(contact);
      }
    }

  editContact(contact:Contact){
    this.editing = true;
    this.contact = contact;
  }

  async updateContact(){
    await this.contactService.updateContactOnDb(this.contact);
    this.contact = new Contact();
  }

  async deleteContact(contact:Contact){
    await this.contactService.deleteContactOnDb(contact);
    this.contacts = this.contacts?.filter((x)=> x.id != contact.id);
  }

}
