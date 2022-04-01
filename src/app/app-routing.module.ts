import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FlightComponent } from './flight/flight.component';
import { FlightdetailComponent } from './flightdetail/flightdetail.component';
import { LoginpageComponent } from './loginpage/loginpage.component';

const routes: Routes = [
  { path: '', component: LoginpageComponent },
  { path: 'Dashboard', component: DashboardComponent },
  { path: 'flight', component: FlightComponent },
  { path: 'flightdetail', component:  FlightdetailComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
