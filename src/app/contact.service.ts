import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private httpClient: HttpClient) {}
  getContacts(): Observable<Contact[]> {
    return this.httpClient.get<Contact[]>(
      'http://localhost/apicontacts/contacts.php'
    );
  }
  addContact(newcontact: Contact): Observable<Contact> {
    return this.httpClient.post<Contact>(
      'http://localhost/apicontacts/add_contact.php',
      newcontact
    );
  }
  updateContact(editContact: Contact): Observable<Contact> {
    return this.httpClient.put<Contact>(
      'http://localhost/apicontacts/update_contact.php',
      editContact
    );
  }
  deleteContact(deleteContact: number): Observable<object> {
    return this.httpClient.delete<Contact>(
      'http://localhost/apicontacts/delete_contact.php?id=' + deleteContact
    );
  }
  findContacts(searchterm: String): Observable<Contact[]> {
    return this.httpClient.get<Contact[]>(
      'http://localhost/apicontacts/find_contact.php?term=' + searchterm
    );
  }
}
