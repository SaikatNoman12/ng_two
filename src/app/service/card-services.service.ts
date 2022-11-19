import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class CardServicesService {

  constructor() { }

  massageAlert(product: string): void {
    alert(`${product} is selected!`);
  };

}