import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cild',
  templateUrl: './cild.component.html',
  styleUrls: ['./cild.component.css']
})
export class CildComponent implements OnInit {

  @Input() isValid: boolean = false;
  @Input() selectData: string = '';
  addData: any;

  @Input() placeholderText: string = 'Search here...';

  @Input() placeholderTextTwo: string = 'Search box two';

  constructor() { }

  ngOnInit(): void {
  }

  arr: any[] = [];

  onAddData() {

    if (this.selectData) {
      this.addData = this.selectData;

      this.arr.push({
        name: this.addData
      });
    }
    else {
      return
    }
  }



}
