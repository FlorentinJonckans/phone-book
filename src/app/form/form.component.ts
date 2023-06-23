import { Component } from '@angular/core';
import { Location } from '@angular/common';

import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Profil } from 'src/models/profil.model';

import { ListContactService } from '../services/list-contact/list-contact.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  // https://angular.io/guide/reactive-forms
  // https://angular.io/guide/observables-in-angular

  // FormGroup/FormControl syntaxe
  // profileForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   birthday: new FormControl(''),
  //   imgProfil: new FormControl(''),
  //   mail: new FormControl(''),
  //   phone: new FormControl(''),
  //   status: new FormControl('')
  // });

  profileForm!: FormGroup;

  constructor(
    private location: Location,
    private listContactService: ListContactService,
    private fb: FormBuilder
    ){

  }

  ngOnInit(): void {
    // FormBuilder syntaxe
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthday: ['', Validators.required],
      imgProfil: ['', Validators.required],
      mail: ['', Validators.required],
      phone: ['', Validators.required],
      status: ['', Validators.required]
    });
  }

  updateProfile() {    
    this.profileForm.patchValue({
      firstName: 'Florentin',
      lastName: 'Jonckans',
      birthday: "10/09/1999",
      imgProfil: '../../assets/unknowed.png',
      mail: 'flo.j62@hotmail.fr',
      phone: '0768056343',
      status: 'provider'     
    });
  }

    

  onSubmit() {
    // TODO: Use EventEmitter with form value
    //console.warn(this.profileForm.value);

    let newProfil = new Profil();
    newProfil.firstName = this.profileForm.value.firstName;
    newProfil.lastName = this.profileForm.value.lastName;
    newProfil.birthday = this.profileForm.value.birthday;
    newProfil.imgProfil = this.profileForm.value.imgProfil;
    newProfil.mail = this.profileForm.value.mail;
    newProfil.phone = this.profileForm.value.phone;
    newProfil.status = this.profileForm.value.status;

    this.listContactService.setProfilFromForm(newProfil);
  }

  goBack(): void {
    this.location.back();
  }
}
