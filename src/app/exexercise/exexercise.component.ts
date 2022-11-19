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

  userAdd(user: any) {

    if (user.value === '' || user.value.trim() === '') {
      alert('Please Enter Input Text.');
    }
    else {
      this.userInput = user.value;
      this.userDataArr.push({
        name: this.userInput
      });
    }
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

  adminAdd(admin: any): void {
    if (admin.value === '' || admin.value.trim() === '') {
      alert("Please Enter Input Text.");
    }
    else {
      this.adminInput = admin.value;
      this.adminDataArr.push({
        name: this.adminInput
      });
    }
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
