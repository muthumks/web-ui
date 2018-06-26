import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContainerComponent } from './container/container.component';
import { CpaCollegeComponent } from './container/cpa-college/cpa-college.component';

const appRoute :Routes=[
  {
    path:'cpa-college', component:CpaCollegeComponent,
  },
  {
    path:'', redirectTo:'/cpa-college', pathMatch:'full'
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
  ],
  imports: [
    BrowserModule,
   RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
