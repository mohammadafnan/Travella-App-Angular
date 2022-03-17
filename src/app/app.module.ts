import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatGridListModule} from '@angular/material/grid-list';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { FlightComponent } from './flight/flight.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    DashboardComponent,
    FlightComponent,
    // MatToolbarModule,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatGridListModule,
    Ng2SearchPipeModule,
    FormsModule,      
    // RouterModule.forRoot([
    //   { path: 'Dashboard', component: DashboardComponent },
    // ])
  ],
  // exports: [
  //   MatToolbarModule,

  // ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
