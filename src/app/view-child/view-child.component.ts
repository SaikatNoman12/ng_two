import { ChildViewComponent } from './child-view/child-view.component';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit, AfterViewInit {

  userName: string = 'Khan';

  @ViewChild('title') title!: ElementRef;

  @ViewChild(ChildViewComponent) box!: ChildViewComponent;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.title.nativeElement.style.background = "crimson";
    this.title.nativeElement.style.padding = "30px";
    this.title.nativeElement.style.borderRadius = '10px';
    this.title.nativeElement.classList = 'newClass';

    this.title.nativeElement.firstElementChild.innerHTML = "Set ViewChild() directive Value.";
  }

  changeChildMethod() {
    if (this.box.userDetail === "Mahin Khan") {
      this.box.userDetail = "User Default Value";
    }
    else {
      this.box.userDetail = "Mahin Khan";
    }
  }

  callChildMethod() {
    this.box.onShowAlert();
  }

}
