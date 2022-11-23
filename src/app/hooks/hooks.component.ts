import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  inData: string = 'Jhone Deo';

  onDataAdd(ref: any) {
    this.inData = ref.value;
  }

  destroy:boolean = true;

  onDestroy(){
    this.destroy = false;
  }

}
