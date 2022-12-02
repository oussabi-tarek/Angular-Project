import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../contact';
import { response } from 'express';
import { TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  Date: Date = new Date();
  Contacts: Contact[] = [];
  ContactToEdit: Contact = new Contact();
  editindex: number = 0;
  modalRef?: BsModalRef;
  ContactToDelete: Contact = new Contact();
  deleteindex: number = 0;
  message?: string;
  searchterm: string = '';

  constructor(
    private contactService: ContactService,
    private modalService: BsModalService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.Date = new Date();
    this.contactService.getContacts().subscribe((response: Contact[]) => {
      console.log(response);
      this.Contacts = response;
    });
  }

  confirm(): void {
    this.message = 'Confirmed!';
    this.contactService
      .deleteContact(this.ContactToDelete.id)
      .subscribe((response) => {
        this.ContactToDelete.id = 0;
        this.ContactToDelete.nom = '';
        this.ContactToDelete.prenom = '';
        this.ContactToDelete.tel = 0;
        this.Contacts.splice(this.deleteindex, 1);
      });
    this.modalRef?.hide();
    window.location.href = '/home';
  }

  decline(): void {
    this.message = 'Declined!';
    this.modalRef?.hide();
  }

  removeContact(i: number) {
    console.log(i);
    this.Contacts.splice(i, 1);
  }

  editContact(index: number, template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    this.ContactToEdit.id = this.Contacts[index].id;
    this.ContactToEdit.nom = this.Contacts[index].nom;
    this.ContactToEdit.prenom = this.Contacts[index].prenom;
    this.ContactToEdit.tel = this.Contacts[index].tel;
    this.editindex = index;
  }
  confirmUpdate() {
    this.contactService
      .updateContact(this.ContactToEdit)
      .subscribe((response) => {
        var updatedContact = new Contact();
        updatedContact.id = response.id;
        updatedContact.nom = response.nom;
        updatedContact.prenom = response.prenom;
        updatedContact.tel = response.tel;
        this.Contacts[this.editindex] = updatedContact;
        this.ContactToEdit.id = 0;
        this.ContactToEdit.nom = '';
        this.ContactToEdit.prenom = '';
        this.ContactToEdit.tel = 0;
      });
  }
  confirmDeleteContact(index: number, template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
    this.ContactToDelete.id = this.Contacts[index].id;
    this.ContactToDelete.nom = this.Contacts[index].nom;
    this.ContactToDelete.prenom = this.Contacts[index].prenom;
    this.ContactToDelete.tel = this.Contacts[index].tel;
    this.deleteindex = index;
  }

  findContacts() {
    this.contactService
      .findContacts(this.searchterm)
      .subscribe((response: Contact[]) => {
        this.Contacts = response;
        this.searchterm = '';
      });
  }
}
