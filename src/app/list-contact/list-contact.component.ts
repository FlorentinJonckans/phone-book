import { Component, Input, OnInit } from '@angular/core';
import { Profil } from 'src/models/profil.model';
import { ListContactService } from '../services/list-contact/list-contact.service';

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.css']
})
export class ListContactComponent implements OnInit {
  listContact!: Profil[];
  
  constructor(private listContactService : ListContactService){

  }

  ngOnInit() {
    this.getListContact();
  }

  getListContact(): void {
    this.listContactService.getListContact()
    .subscribe(listContacts => this.listContact = listContacts);
  }
}
