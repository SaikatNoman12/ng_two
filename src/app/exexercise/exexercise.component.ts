import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exexercise',
  templateUrl: './exexercise.component.html',
  styleUrls: ['./exexercise.component.css']
})
export class ExexerciseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // user data:-
  userDataArr: any[] = [];
  userInput: string = '';


  myUserData(event: any) {
    this.userDataArr.push(event);
    this.userInput = event.name;
  }



  userRemove(index: number): void {
    this.userDataArr.splice(index, 1);
    if (this.userDataArr.length <= 0) {
      this.userInput = '';
    }
  }

  allUserRemove(): void {
    this.userDataArr.splice(0, this.userDataArr.length);

    // this.userDataArr = [];

    if (this.userDataArr.length <= 0) {
      this.userInput = '';
    }
  }


  // admin data:-
  adminDataArr: any[] = [];
  adminInput: string = '';


  myAdminData(event: any) {
    this.adminDataArr.push(event);
    this.adminInput = event.name;
    console.log(this.adminInput);
  }

  adminRemove(index: number): void {
    this.adminDataArr.splice(index, 1);
    if (this.adminDataArr.length <= 0) {
      this.adminInput = '';
    }
  }

  adminAllRemove() {
    this.adminDataArr.splice(0, this.adminDataArr.length);
    if (this.adminDataArr.length <= 0) {
      this.adminInput = '';
    }
  }

}
