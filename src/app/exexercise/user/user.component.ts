import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  // user data:-
  @Input() placeHolderData: string = '';
  @Input() userDataArr: any[] = [];
  @Output() userInput: any = new EventEmitter<string>();
  @Input() userData: string = '';
  myObj: any = {};

  constructor() { }

  ngOnInit(): void {
  }

  userAdd(user: any) {

    if (user.value === '' || user.value.trim() === '') {
      alert('Please Enter Input Text.');
    }
    else {
      this.userData = user.value;
      this.myObj = {
        name: this.userData
      }

      this.userInput.emit(this.myObj);
      user.value = '';
    }
  }



}
