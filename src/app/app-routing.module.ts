import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppraisalsComponent } from './appraisals/appraisals.component';
import { ConstructionsComponent } from './constructions/constructions.component';
import { ContactsComponent } from './contacts/contacts.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { ExperienceComponent } from './experience/experience.component';
import { HomeComponent } from './home/home.component';
import { RestorationsComponent } from './restorations/restorations.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component:  HomeComponent},
  { path: 'empresa', component:  EnterpriseComponent},
  { path: 'obras', component: ConstructionsComponent},
  { path: 'restauraciones', component: RestorationsComponent},
  { path: 'avaluos', component: AppraisalsComponent},
  { path: 'experiencia', component: ExperienceComponent},
  { path: 'contacto', component: ContactsComponent},
];

export const appRouting = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }