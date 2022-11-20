import { Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewServiceService {

  constructor() { }

  adminDataObj: any = {};

  singleRemove(index: any, adminDataArr: any): void {
    adminDataArr.splice(index, 1);
  }

}
