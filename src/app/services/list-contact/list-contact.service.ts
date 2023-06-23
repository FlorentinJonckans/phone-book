import { Injectable } from '@angular/core';
import { Profil } from 'src/models/profil.model';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListContactService {
  ID_CLIENT : number = 1;

  LISTCONTACTS : Profil[] = [
    {
      id: this.ID_CLIENT++,
      firstName: "Virginie",
      lastName: "Laporte",
      birthday: "25/06/1999", 
      imgProfil: "./assets/profile1.jpg",
      mail: "v.laporte@simplon.co",
      phone: "0987654321",
      status: "customer"
    },
    {
      id: this.ID_CLIENT++,
      firstName: "Charlotte",
      lastName: "Dupont",
      birthday: "15/08/1999", 
      imgProfil: "./assets/profile2.jpg",
      mail: "c.dupont@simplon.co",
      phone: "0978563412",
      status: "customer"
    },
    {
      id: this.ID_CLIENT++,
      firstName: "Lian-Shi",
      lastName: "Chan",
      birthday: "01/01/1991", 
      imgProfil: "./assets/profile3.jpg",
      mail: "l.chan@simplon.co",
      phone: "0879573513",
      status: "customer"
    },
    {
      id: this.ID_CLIENT++,
      firstName: "Georges",
      lastName: "Lafonte",
      birthday: "29/03/1987", 
      imgProfil: "./assets/profile4.jpg",
      mail: "g.lafonte@simplon.co",
      phone: "0129384756",
      status: "provider"
    },
    {
      id: this.ID_CLIENT++,
      firstName: "Charles",
      lastName: "Smith",
      birthday: "25/12/1980", 
      imgProfil: "./assets/profile5.jpg",
      mail: "c.smith@simplon.co",
      phone: "0391864751",
      status: "customer"
    },
    {
      id: this.ID_CLIENT++,
      firstName: "Cynthia",
      lastName: "Maraba",
      birthday: "14/02/2000", 
      imgProfil: "./assets/profile6.jpg",
      mail: "c.maraba@simplon.co",
      phone: "0638271645",
      status: "customer"
    },
    {
      id: this.ID_CLIENT++,
      firstName: "Edwin",
      lastName: "Pagie",
      birthday: "21/05/1996", 
      imgProfil: "./assets/profile7.jpg",
      mail: "e.pagie@simplon.co",
      phone: "0594827688",
      status: "provider"
    },
    {
      id: this.ID_CLIENT++,
      firstName: "Megumi",
      lastName: "Kawazaki",
      birthday: "18/09/1993", 
      imgProfil: "./assets/profile8.jpg",
      mail: "m.kawazaki@simplon.co",
      phone: "0399874676",
      status: "provider"
    },
    {
      id: this.ID_CLIENT++,
      firstName: "Bryan",
      lastName: "Hopkins",
      birthday: "07/10/1992", 
      imgProfil: "./assets/profile9.jpg",
      mail: "b.hopkins@simplon.co",
      phone: "0997755446",
      status: "customer"
    }
  ];

  constructor() { }

  // How to manipulate services, observables, sync/async
  // https://angular.io/tutorial/tour-of-heroes/toh-pt4
  
  getListContact(): Observable<Profil[]> {
    const listContact = of(this.LISTCONTACTS);
    return listContact;
  }

  getOneContact(id: number): Observable<Profil> {
    // For now, assume that a profil with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const oneContact = this.LISTCONTACTS.find(profil => profil.id === id)!;
    return of(oneContact);
  }

  setProfilFromForm(profil : Profil) {
    profil.id = this.ID_CLIENT++;
    this.LISTCONTACTS.push(profil);
  }
}
