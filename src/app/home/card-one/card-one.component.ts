import { CardServicesService } from './../../service/card-services.service';
import { MassageService } from './../../service/massage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-one',
  templateUrl: './card-one.component.html',
  styleUrls: ['./card-one.component.css']
})
export class CardOneComponent implements OnInit {

  constructor(
    private _massageService: CardServicesService
  ) { }

  ngOnInit(): void {
  }

  btnClick(): void {
    const ser = new MassageService();
    ser.massage();
  };

  selectMass(): void {
    this._massageService.massageAlert("Mobile");
  };

}
