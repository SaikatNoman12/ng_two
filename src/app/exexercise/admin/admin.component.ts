import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

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

}
