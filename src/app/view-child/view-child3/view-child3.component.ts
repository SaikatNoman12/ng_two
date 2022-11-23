import { MyDirectiveDirective } from './../../Directive/my-directive.directive';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-child3',
  templateUrl: './view-child3.component.html',
  styleUrls: ['./view-child3.component.css']
})
export class ViewChild3Component implements OnInit {

  @ViewChild(MyDirectiveDirective) myDirective!: MyDirectiveDirective;

  constructor() { }

  ngOnInit(): void {
  }

  onChangeColor(color: string) {
    this.myDirective.onShowColor(color);
  }

  showAlert() {
    alert('Hasan Kobir is here!');
  }

}
