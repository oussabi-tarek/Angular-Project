import { Component, OnInit } from '@angular/core';
import { response } from 'express';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  newcontact: Contact = new Contact();

  constructor(private contactService: ContactService, private router: Router) {}

  ngOnInit(): void {}
  saveContact() {
    this.contactService.addContact(this.newcontact).subscribe((response) => {
      console.log(response);
      this.router.navigate(['/home']);
    }),
      (error: Error) => {
        console.log(error);
      };
  }
}
