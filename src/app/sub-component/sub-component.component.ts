import { SubjectSerService } from './../service/subject-ser.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-component',
  templateUrl: './sub-component.component.html',
  styleUrls: ['./sub-component.component.css']
})
export class SubComponentComponent implements OnInit {

  @Input() placeHolderText: string = '';

  constructor(
    private _subService: SubjectSerService
  ) {

    _subService.uName.subscribe((data: any) => {
      this.userName = data;
    });

  }

  ngOnInit(): void {
  }

  userName: string = 'Jhone Deo';

  addUserData(ref: any): void {
    this._subService.uName.next(ref.value);
  }

}
