import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConstructionsComponent } from './constructions/constructions.component';
import { ContactsComponent } from './contacts/contacts.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { ExperienceComponent } from './experience/experience.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: "inicio",
    component: HomeComponent
  },
  {
    path: "empresa",
    component: EnterpriseComponent
  },
  {
    path: "experiencia",
    component: ExperienceComponent
  },
  {
    path: "obras",
    component: ConstructionsComponent
  },
  {
    path: "contactos",
    component: ContactsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
