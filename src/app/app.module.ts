import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs'
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { MatIconModule } from '@angular/material/icon';

import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { ExperienceComponent } from './experience/experience.component';
import { ConstructionsComponent } from './constructions/constructions.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RestorationsComponent } from './restorations/restorations.component';
import { AppraisalsComponent } from './appraisals/appraisals.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ContactsComponent,
    EnterpriseComponent,
    ExperienceComponent,
    ConstructionsComponent,
    RestorationsComponent,
    AppraisalsComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbCarouselModule,
    MatToolbarModule,
    MatTabsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    HomeComponent,
  ]
})
export class AppModule { }
