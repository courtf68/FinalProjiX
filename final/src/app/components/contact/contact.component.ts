import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Input() receivedId?:string;
  @Input() projects?:Project[]

  contact?:Contact = new Contact();
  contacts?:Contact[] = [];
  editing: boolean = false;

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.projects = [{id:'Victor', title:"Project 1"}, {id:"Courtney", title:"Project 2"}, {id:"Cameron", title:"Project 3"}];

  }

  onSubmit(){

  }

  async addContact(){
    await this.contactService.addContactToDb(this.contact);
    this.contacts.push(this.contact);
    this.contact = new Contact();  
  }

    async fetchFeedback(){
      this.contacts = []

      let res: any = await this.contactService.getContacts();

      for (let i = 0; i<res.contacts.length; i++){
        const contact = new Contact();

        contact.id = res.contacts[i]._id;
        contact.content = res.contacts[i].content;
        contact.createdAt = res.contacts[i].createdAt;
        contact.updatedAt = res.contacts[i].updatedAt;

        this.contacts.push(contact);
      }
    }

  viewContact(){
    
  }

  editContact(contact:Contact){
    this.editing = true;
    this.contact = contact;
  }

  async updateContact(){
    await this.contactService.updateFeedbackOnDb(this.contact);
    this.contact = new Contact();
  }

  async deleteContact(contact:Contact){
    await this.contactService.deletFeedbackOnDb(contact);
    this.contacts = this.contacts?.filter((x)=> x.id != contact.id);
  }

}
