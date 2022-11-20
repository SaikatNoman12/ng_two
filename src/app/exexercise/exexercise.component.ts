import { NewServiceService } from './../service/new-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exexercise',
  templateUrl: './exexercise.component.html',
  styleUrls: ['./exexercise.component.css']
})
export class ExexerciseComponent implements OnInit {

  placeHolderSearch: string = 'Add user...';
  placeHolderData: string = 'Add admin...';

  // user data:-
  userDataArr: any[] = [];
  userInput: string = '';


  // admin data:-
  adminDataArr: any[] = [];
  adminInput: string = '';

  constructor(private _nService: NewServiceService) { }

  ngOnInit(): void {
  }

  // user function:-
  myUserData(event: any) {
    this.userDataArr.push(event);
    this.userInput = event.name;
  }

  userRemove(index: number): void {
    this._nService.singleRemove(index, this.userDataArr);
    if (this.userDataArr.length <= 0) {
      this.userInput = '';
    }
  }

  allUserRemove(): void {
    this._nService.allRemove(this.userDataArr);
    if (this.userDataArr.length <= 0) {
      this.userInput = '';
    }
  }

  // admin function:-
  myAdminData(event: any) {
    this.adminDataArr.push(event);
    this.adminInput = event.name;
  }

  adminRemove(index: number): void {
    this._nService.singleRemove(index, this.adminDataArr);
    if (this.adminDataArr.length <= 0) {
      this.adminInput = '';
    }
  }

  adminAllRemove() {
    this._nService.allRemove(this.adminDataArr);
    if (this.adminDataArr.length <= 0) {
      this.adminInput = '';
    }
  }

}
