import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-pipe',
  templateUrl: './filter-pipe.component.html',
  styleUrls: ['./filter-pipe.component.css']
})
export class FilterPipeComponent implements OnInit {

  inputData: any = '';

  constructor() { }


  ngOnInit(): void {

  }

  products: any[] = [
    {
      name: 'Laptop',
      price: '20303tk',
      nA: 'Available'
    },
    {
      name: 'Mobile (samsung)',
      price: '30200tk',
      nA: 'Not Available'
    },
    {
      name: 'Washing Machine (singer)',
      price: '22000tk',
      nA: 'Available'
    },
    {
      name: 'Watch (apple)',
      price: '44000tk',
      nA: 'Available'
    },
    {
      name: 'Air Phone (hp)',
      price: '2400tk',
      nA: 'Delivered'
    },
    {
      name: 'Mobile (walton)',
      price: '13010tk',
      nA: 'Not Available'
    },
    {
      name: 'Washing Machine (walton)',
      price: '12000tk',
      nA: 'Available'
    },
    {
      name: 'Note Book (apple)',
      price: '34000tk',
      nA: 'Processing'
    },
  ];

}
