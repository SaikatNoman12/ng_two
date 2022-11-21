import { MyServiceService } from './../service/my-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-exersice',
  templateUrl: './new-exersice.component.html',
  styleUrls: ['./new-exersice.component.css']
})
export class NewExersiceComponent implements OnInit {

  // User data:-
  userColorSet: string = 'red';
  userArr: any[] = [];
  userInput: string = '';


  // Admin data:-
  adminColorSet: string = 'red';
  adminArr: any[] = [];
  adminInput: string = '';

  constructor(
    private _myService: MyServiceService
  ) { }

  ngOnInit(): void {
  }


  // User functions:-
  myUserValue(eventData: any): void {
    this.userArr.push({
      name: eventData
    });
    this.userColorSet = 'green';
    this.userInput = eventData;
  }

  singleRemove(index: number) {
    this._myService.singleRemove(this.userArr, index);
    if (this.userArr.length <= 0) {
      this.userColorSet = 'red';
      this.userInput = '';
    }
  }

  allUserRemove() {
    this._myService.allRemove(this.userArr);
    this.userColorSet = 'red';
    this.userInput = '';
  }



  // Admin functions:-
  myAdminValue(eventData: any) {
    this.adminArr.push({
      name: eventData
    });
    this.adminColorSet = 'green';
    this.adminInput = eventData;
  }

  singleAdminRemove(index: number) {
    this._myService.singleRemove(this.adminArr, index);
    if (this.adminArr.length <= 0) {
      this.adminColorSet = 'red';
      this.adminInput = '';
    }
  }

  allRemove() {
    this._myService.allRemove(this.adminArr);
    this.adminColorSet = 'red';
    this.adminInput = '';
  }


}
