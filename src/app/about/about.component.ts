import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  allData: any[] = [
    {
      name: 'King Car',
      info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi rem nisi libero quae dicta! Lorem ipsum dolor sit amet.',
      btnData: 'King Car',
      routerLin: 'king-car',
      imgIn: 'https://nts-tokushima.com/en/assets/img/hired_car/photo_crown_royal_saloon.jpg'
    },
    {
      name: 'Honda HR',
      info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi rem nisi libero quae dicta! Lorem ipsum dolor sit amet.',
      btnData: 'Honda HR',
      routerLin: 'honda-hr',
      imgIn: 'https://di-uploads-pod14.dealerinspire.com/hondaeastcincy/uploads/2020/12/2021Accord1.jpg'
    },
    {
      name: 'Land Toyota',
      info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi rem nisi libero quae dicta! Lorem ipsum dolor sit amet.',
      btnData: 'Land Toyota',
      routerLin: 'land-toyota',
      imgIn: 'https://cdn.dnaindia.com/sites/default/files/styles/full/public/2016/11/07/517257-2016-toyota-fortuner.jpg'
    },
    {
      name: 'Audi',
      info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi rem nisi libero quae dicta! Lorem ipsum dolor sit amet.',
      btnData: 'Audi',
      routerLin: 'audi',
      imgIn: 'https://www.americancoachlimousine.com/wp-content/uploads/slideshow-gallery/fleet-chraysler-300-01.jpg'
    },
  ];


}
