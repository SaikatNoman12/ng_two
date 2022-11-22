import { SubjectSerService } from './../service/subject-ser.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-component3',
  templateUrl: './sub-component3.component.html',
  styleUrls: ['./sub-component3.component.css']
})
export class SubComponent3Component implements OnInit {

  @Input() placeHolderText: string = '';

  userName: string = '';

  constructor(private _dataService: SubjectSerService) {
    _dataService.uName.subscribe((data: any) => {
      this.userName = data;
    });
  }

  ngOnInit(): void {
  }

  onAddData(ref: any) {
    this._dataService.uName.next(ref.value);
  }

}
