import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor() { }

  singleRemove(arr: any, index: number): void {
    arr.splice(index, 1);
  }

  allRemove(arr: any): void {
    arr.splice(0, arr.length);
  }

}
