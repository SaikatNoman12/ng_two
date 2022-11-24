import { DropDirectiveDirective } from './../Directive/drop-directive.directive';
import { Component, OnInit, ViewChild, Directive } from '@angular/core';


@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnInit {

  constructor() { }

 @ViewChild(DropDirectiveDirective) dropDire!:DropDirectiveDirective;

  ngOnInit(): void {
  }



  inData: string = 'Jhone Deo';

  onDataAdd(ref: any) {
    this.inData = ref.value;
  }

  destroy: boolean = true;

  onDestroy() {
    this.destroy = false;
  }

  userData: string = 'My Drop Down';

  onshowDown(event: any) {
    this.userData = event.target.innerText;
    this.dropDire.myClick();
  }

}
