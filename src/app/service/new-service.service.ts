import { Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewServiceService {
  
  adminDataObj: any = {};

  constructor() { }

  singleRemove(index: any, adminDataArr: any): void {
    adminDataArr.splice(index, 1);
  }

  allRemove(dataArr: any): void {
    dataArr.splice(0, dataArr.length);
  }

}
