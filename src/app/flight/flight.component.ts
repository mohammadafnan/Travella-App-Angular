import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss']
})
export class FlightComponent implements OnInit {

  loc1: string = "karachi"
  loc2: string = "Malvedive"

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  backtodashboard(){
    this.router.navigate(['/Dashboard']);
    // console.log("flight route working")
  
    // alert("clicked me!");
  
  }
}
