import { SubjectSerService } from './../service/subject-ser.service';
import { Component, Input, OnInit } from '@angular/core';
import { GgetApiService } from '../service/gget-api.service';

@Component({
  selector: 'app-subject-component',
  templateUrl: './subject-component.component.html',
  styleUrls: ['./subject-component.component.css']
})
export class SubjectComponentComponent implements OnInit {

  constructor(
    private _myService: SubjectSerService,
  ) {
    _myService.uName.subscribe((uName: any) => {
      this.userName = uName;
    });
  }

  ngOnInit(): void {

  }

  @Input() placeHolderText: string = '';

  userName: string = 'Jone Deo';

  apiData: string = '';

}
