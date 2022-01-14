import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from 'src/app/models/contact';

@Injectable({
  providedIn: 'root'
})

export class ContactService {
  url: string = 'http://localhost:4200';

  constructor(private http: HttpClient) {} 

  addContactToDb(contact:Contact) {
    this.http
      .post(this.url + '/feed/contact', {
        id: contact.id,
        content: contact.content,
      })
      .subscribe((postResponse) => {
        console.log(postResponse);
      });
  } 


getContact() {
  return this.http.get(this.url + '/feed/contact').toPromise();
} 

updateContactOnDb(contact: Contact) {
  this.http.put(this.url + '/feed/' + contact.id, {
    id: contact.id,
    content: contact.content
  }).toPromise();
} 
deleteContactOnDb(contact: Contact) {
  const deleteUrl = this.url + '/feed/' + contact.id;
  return this.http.delete(deleteUrl).toPromise();
}
}