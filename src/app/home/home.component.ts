import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isStatusOnline:boolean = true;
  isStatusOffline:boolean = false;

  products:any[] = [
    {name:'Laptop'},
    {name:'TV'},
    {name:'Mobile'},
    {name:'Washing Machine'},
    {name:'Sound Box'},
    {name:'Air Phone'},
  
  ]

}
