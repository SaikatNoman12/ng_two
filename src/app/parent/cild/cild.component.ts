import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cild',
  templateUrl: './cild.component.html',
  styleUrls: ['./cild.component.css']
})
export class CildComponent implements OnInit {

  @Input() isValid: boolean = false;

  @Input() selectData: string = '';

  @Output() addData: any = new EventEmitter<string>();

/*   @Input() placeholderText: string = 'Search here...';

  @Input() placeholderTextTwo: string = 'Search box two'; */
  
  constructor() { }
  
  ngOnInit(): void {
  }
  
  
  obj: object = {};
  onAddData() {

    if (this.selectData) {
     
      this.obj = {
        name:this.selectData
      };

      this.addData.emit(this.obj);
    }
    else {
      return
    }



  }



}
