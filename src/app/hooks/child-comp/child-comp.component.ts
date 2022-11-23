import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.css']
})
export class ChildCompComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() userData: string = "";

  countNum: number = 1;

  // constructor Init:-----
  constructor() {
    console.log("Constructor Loaded.");
  }

  counter: any = setInterval(() => {
    this.countNum++
    console.log(this.countNum);
  }, 1000);


  // ngOnInit Hook:-----
  ngOnInit(): void {
    console.log("ngOnInit Loaded.");
  }

  // ngOnChanges Hook:-----
  ngOnChanges(onChange: SimpleChanges) {
    console.log("ngOnChanges Loaded.");
    console.log(onChange);
  }

  // ngDoCheck Hook:-----
  ngDoCheck() {
    console.log("ngDoCheck Loaded.");
  }

  // ngAfterContentInit:-----
  ngAfterContentInit() {
    console.log("ngAfterContentInit Loaded.");
  }

  // ngAfterContentCheck:-----
  ngAfterContentChecked() {
    console.log("ngAfterContentChecked Loaded.");
  }

  // ngAfterViewInit:-----
  ngAfterViewInit() {
    console.log("ngAfterViewInit Loaded.");
  }

  // ngAfterViewChecked:-----
  ngAfterViewChecked() {
    console.log("ngAfterViewChecked Loaded.");
    console.log("-----------");
  }

  // ngOnDestroy:-----
  ngOnDestroy() {
    console.log("ngOnDestroy Loaded");
    clearInterval(this.counter);
  }



}
