import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-exersice',
  templateUrl: './new-exersice.component.html',
  styleUrls: ['./new-exersice.component.css']
})
export class NewExersiceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  // User data:-
  userColorSet: string = 'red';
  userArr: any[] = [];
  userInput: string = '';

  myUserValue(eventData: any): void {
    this.userArr.push({
      name: eventData
    });
    this.userColorSet = 'green';
    this.userInput = eventData;
  }

  singleRemove(index: number) {
    this.userArr.splice(index, 1);
    if (this.userArr.length <= 0) {
      this.userColorSet = 'red';
      this.userInput = '';
    }
  }

  allUserRemove() {
    this.userArr.splice(0, this.userArr.length);
    this.userColorSet = 'red';
    this.userInput = '';
  }


  // admin data:-
  adminColorSet: string = 'red';
  adminArr: any[] = [];
  adminInput: string = '';

  myAdminValue(eventData: any) {
    this.adminArr.push({
      name: eventData
    });
    this.adminColorSet = 'green';
    this.adminInput = eventData;
  }

  singleAdminRemove(index: number) {
    this.adminArr.splice(index, 1);
    if (this.adminArr.length <= 0) {
      this.adminColorSet = 'red';
      this.adminInput = '';
    }
  }

  allRemove() {
    this.adminArr.splice(0, this.adminArr.length);
    this.adminColorSet = 'red';
    this.adminInput = '';
  }


}
