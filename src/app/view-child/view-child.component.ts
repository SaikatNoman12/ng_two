import { ChildView2Component } from './child-view2/child-view2.component';
import { ChildViewComponent } from './child-view/child-view.component';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit, AfterViewInit {

  userName: string = 'Khan';

  @ViewChild('title') title!: ElementRef;

  @ViewChild('titleTwo') titleTwo!: ElementRef;

  @ViewChild(ChildViewComponent) box!: ChildViewComponent;

  @ViewChild(ChildView2Component) child!: ChildView2Component;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {


  }

  ngAfterViewInit(): void {
    this.title.nativeElement.style.background = "crimson";
    this.title.nativeElement.style.padding = "30px";
    this.title.nativeElement.style.borderRadius = '10px';
    this.title.nativeElement.classList = 'newClass';

    this.title.nativeElement.firstElementChild.innerHTML = "Set ViewChild() directive Value.";

    this.renderer.setStyle(this.titleTwo.nativeElement, 'backgroundColor', 'crimson');
    this.renderer.setStyle(this.titleTwo.nativeElement, 'padding', '30px');
    this.renderer.setStyle(this.titleTwo.nativeElement, 'borderRadius', '10px');
    this.renderer.addClass(this.titleTwo.nativeElement, 'ggg');
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

  changeChildMethod2() {

    this.child.userDetail = this.child.userDetail === 'User Default Value 2' ? 'Rahim  khan Is Here!' : 'User Default Value 2';

  }

  callChildMethod2() {
    this.child.onAlert();
  }


}
