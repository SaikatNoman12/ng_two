import { group } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-exercise',
  templateUrl: './child-exercise.component.html',
  styleUrls: ['./child-exercise.component.css']
})
export class ChildExerciseComponent implements OnInit {


  @Input() boxColor: string = '';
  @Input() placeHolderText: string = '';
  @Input() arrData: any[] = [];
  @Input() inData: string = '';

  @Output() inValue: any = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  addData(refer: any) {
    if (refer.value === '' || refer.value.trim() === '') {
      alert('Please fill your input!');
    }
    else {
      this.inData = refer.value;
      this.inValue.emit(refer.value);
    }
  }


}
