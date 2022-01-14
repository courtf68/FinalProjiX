import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from 'src/app/models/contact';

@Injectable({
  providedIn: 'root'
})

export class ContactService {
  url: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {} 

  addContactToDb(contact:Contact) {
    this.http
      .post(this.url + '/contact/contact', {
        id: contact.id,
        content: contact.content,
      })
      .subscribe((postResponse) => {
        console.log(postResponse);
      });
  } 


getContact() {
  return this.http.get(this.url + '/contact/contacts').toPromise();
} 

updateContactOnDb(contact: Contact) {
  this.http.put(this.url + '/contact/' + contact.id, {
    id: contact.id,
    content: contact.content
  }).toPromise();
} 
deleteContactOnDb(contact: Contact) {
  const deleteUrl = this.url + '/contact/' + contact.id;
  return this.http.delete(deleteUrl).toPromise();
}
}