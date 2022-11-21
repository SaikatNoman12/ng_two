import { SubjectSerService } from './../service/subject-ser.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-component2',
  templateUrl: './sub-component2.component.html',
  styleUrls: ['./sub-component2.component.css']
})
export class SubComponent2Component implements OnInit {

  @Input() placeHolderText: string = '';

  constructor(private _subService: SubjectSerService) {
    _subService.uName.subscribe((data: any) => this.userName = data);
  }

  ngOnInit(): void {
  }

  userName: string = 'Jhone Deo';

  onAddData(refer: any) {
    this._subService.uName.next(refer.value);
  }

}
