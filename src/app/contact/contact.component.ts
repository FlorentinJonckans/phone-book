import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Profil } from 'src/models/profil.model';
import { ListContactService } from '../services/list-contact/list-contact.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  oneContact!: Profil;

  constructor(
    private route: ActivatedRoute,
    private listContactService: ListContactService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getOneContact();
  }

  getOneContact(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.listContactService.getOneContact(id)
      .subscribe(contact => this.oneContact = contact);
  }

  goBack(): void {
    this.location.back();
  }
}