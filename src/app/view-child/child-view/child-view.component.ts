import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child-view',
  templateUrl: './child-view.component.html',
  styleUrls: ['./child-view.component.css']
})
export class ChildViewComponent implements OnInit {

  userDetail: string = "User Default Value";

  constructor() { }


  ngOnInit(): void {
  }

  onShowAlert() {
    alert(`${this.userDetail} os here.`);
  }

}
