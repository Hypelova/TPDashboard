import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  
  rndm:number = Math.floor(Math.random() * (10000 - 1500 + 1)) + 1500;
  constructor() { }

  ngOnInit(): void {
  }

}
