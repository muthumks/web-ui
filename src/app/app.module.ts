import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContainerComponent } from './container/container.component';
import { CpaCollegeComponent } from './container/cpa-college/cpa-college.component';
import { UtilsComponent } from './container/utils/utils.component';
import { LeftNavComponent } from './container/left-nav/left-nav.component';
import { CollegeEventComponent } from './container/college-event/college-event.component';
import { CollegeEventSponsorshipComponent } from './container/college-event-sponsorship/college-event-sponsorship.component';
import { CpaCollegeService } from './service/cpa-college.service';
import { CpaProfessorComponent } from './container/cpa-professor/cpa-professor.component';

const appRoute :Routes=[
  {
    path:'course', component:CpaCollegeComponent,
  },
  {
    path:'utils', component:UtilsComponent,
  },
  {
    path:'professor', component:CpaProfessorComponent,
  },
  {
    path:'event', component:CollegeEventComponent,
  },
  {
    path:'sponsor', component:CollegeEventSponsorshipComponent,
  },
  {
    path:'', redirectTo:'/event', pathMatch:'full'
  },
  {
    path:'**', component:CpaCollegeComponent,
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContainerComponent,
    CpaCollegeComponent,
    UtilsComponent,
    LeftNavComponent,
    CollegeEventComponent,
    CollegeEventSponsorshipComponent,
    CpaProfessorComponent,
  ],
  imports: [
    BrowserModule,
   RouterModule.forRoot(appRoute),
   HttpClientModule
  ],
  providers: [CpaCollegeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
