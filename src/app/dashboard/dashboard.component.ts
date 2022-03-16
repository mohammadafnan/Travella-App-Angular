import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})


export class DashboardComponent implements OnInit {
  search: any;

  // Placecard: string[] = ['USA', 'Maldive', 'Turkey', 'Baku'];
  Placecard: any[] = [{
    name: "Arena beach Maldive", url: './../../assets/images/maldive.png',

  },
  {
    name: "Baku Azerbaijan", url: './../../assets/images/baku.png',

  }, {
    name: "Instanbul Turkey", url: './../../assets/images/turkey.png',

  }, {
    name: "Berlin Germany", url: './../../assets/images/Germany.png',

  },
  {
    name: " Italy", url: './../../assets/images/Germany.png',

  },
  {
    name: "Greece", url: './../../assets/images/Germany.png',

  },
  {
    name: "Dubai", url: './../../assets/images/Germany.png',

  },
  {
    name: "Spain", url: './../../assets/images/Germany.png',

  },]
  // }, {
  //   name: "Berlin Germany", url: './../../assets/images/Germany.png',

  // }, {
  //   name: "Berlin Germany", url: './../../assets/images/Germany.png',

  // }, {
  //   name: "Berlin Germany", url: './../../assets/images/Germany.png',

  // },







  constructor() { }
  ngOnInit(): void {
  }

}
