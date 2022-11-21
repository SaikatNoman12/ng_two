import { SubjectSerService } from './../service/subject-ser.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sub-component4',
  templateUrl: './sub-component4.component.html',
  styleUrls: ['./sub-component4.component.css']
})
export class SubComponent4Component implements OnInit {

  constructor(private _myService: SubjectSerService) {
    _myService.uName.subscribe((uname: any) => {
      this.userName = uname;
    })
  }

  ngOnInit(): void {
  }

  @Input() placeHolderText: string = '';

  userName: string = 'Jhone Deo';

  addData(ref:any):void{
    this._myService.uName.next(ref.value);
  }

}
