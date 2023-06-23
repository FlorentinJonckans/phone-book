import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ListContactComponent } from './list-contact/list-contact.component';
import { FormComponent } from './form/form.component';

// How to initialize the routing module
// https://angular.io/tutorial/tour-of-heroes/toh-pt5

const routes: Routes = [
  { path: '', component: ListContactComponent },
  { path: 'contact/:id', component: ContactComponent },
  { path: 'form', component: FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }