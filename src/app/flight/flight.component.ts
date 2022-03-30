import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss']
})
export class FlightComponent implements OnInit {

  loc1: string = "karachi"
  loc2: string = "Maledive"

  constructor(private router: Router) { }

  flightData = [
    {
      timeForm: "6:30 PM",
      timeTo: "9:00 AM",
      totalHour: "1h",
      totalStop: "2",
      price: "RS- 1,25000",
      trip: "Round Trip",
      airline: "https://img.icons8.com/color/48/000000/fedex-airlines.png",
      tripBag: "Cabin bag included ",
      flightClass: "Business Class",
    },
    {
      timeForm: "6:30 AM",
      timeTo: "9:00 PM",
      totalHour: "2h",
      totalStop: "2",
      price: "RS- 1,15000",
      trip: "Round Trip",
      airline: "https://img.icons8.com/color/48/000000/fedex-airlines.png",
      tripBag: "Cabin bag included ",
      flightClass: "Business Class",
    }, {
      timeForm: "6:30 PM",
      timeTo: "9:00 PM",
      totalHour: "3h",
      totalStop: "2",
      price: "RS- 95000",
      trip: "Round Trip",
      airline: "https://img.icons8.com/color/48/000000/fedex-airlines.png",
      tripBag: "Cabin bag included ",
      flightClass: "Business Class",
    }
  ]

  ngOnInit(): void {
  }
  backtodashboard() {
    this.router.navigate(['/Dashboard']);
    // console.log("flight route working")

    // alert("clicked me!");

  }
}
