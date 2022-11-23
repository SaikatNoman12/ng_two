import { getTestBed } from '@angular/core/testing';
import { Component, OnInit, ViewChild, ElementRef, Renderer2, AfterContentInit, ContentChild } from '@angular/core';
import { sample } from 'rxjs';

@Component({
  selector: 'app-child-view2',
  templateUrl: './child-view2.component.html',
  styleUrls: ['./child-view2.component.css']
})
export class ChildView2Component implements OnInit, AfterContentInit {

  @ContentChild('childPara') childData!: ElementRef

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  ngAfterContentInit() {
    this.renderer.setStyle(this.childData.nativeElement, 'color', 'red');
    this.renderer.setAttribute(this.childData.nativeElement, 'title', 'This is my title');
    this.renderer.setAttribute(this.childData.nativeElement, 'class', 'myNewClass');
    this.renderer.setStyle(this.childData.nativeElement, 'fontSize', '20px');

  }



  userDetail: string = 'User Default Value 2';

  onAlert() {
    alert(`${this.userDetail} is here.`);

    const span = this.renderer.createElement('span');

    const data = this.renderer.createText(' Rahima Begom ');

    span.innerHTML = ' <br> Rahim Kahn ';
    // span.style.color = 'black';
    this.renderer.setStyle(span, 'color', 'black');

    this.renderer.appendChild(this.childData.nativeElement, span);
    this.renderer.appendChild(this.childData.nativeElement, data);
  }


}
