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
      price: "Rs - 75000",
      trip: "Round Trip",
      airline: "https://img.icons8.com/color/48/000000/fedex-airlines.png",
      airlineName:"FedEx Airline",
      tripBag: "30Kg Bag ",
      flightClass: "Lower Class",
    },
    {
      timeForm: "6:30 AM",
      timeTo: "9:00 PM",
      totalHour: "2h",
      totalStop: "2",
      price: "Rs - 90000",
      trip: "One Trip",
      airline: "https://img.icons8.com/color/48/000000/united-airlines.png",
      airlineName:"United Airline",
      tripBag: "40Kg Bag",
      flightClass: "Medium Class",
    }, {
      timeForm: "6:30 PM",
      timeTo: "9:00 PM",
      totalHour: "3h",
      totalStop: "2",
      price: "Rs - 1,25000",
      trip: "Round Trip",
      airline: "https://img.icons8.com/color/48/000000/virgin-atlantic-airlines.png",
      airlineName:"Atlantic Airline",
      tripBag: "50Kg Bag ",
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
