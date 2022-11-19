import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class CardServicesService {

  constructor() { }

  productSer: string = "Siful Emon";

  proObjSer: object = {
    name: 'Abul Kasem',
    age: 252,
    country: 'Bongo'
  }

  proArrSer: any[] = [
    {
      name: 'Laptop',
    },
    {
      name: 'TV',
    },
    {
      name: 'Washing Machine',
    },
    {
      name: 'Mobile',
    },
    {
      name: 'Computer',
    },
    {
      name: 'Note',
    }
  ]

  massageAlert(product: string): void {
    alert(`${product} is selected!`);
  };

}