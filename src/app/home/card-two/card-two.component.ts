import { CardServicesService } from './../../service/card-services.service';
import { MassageService } from './../../service/massage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-two',
  templateUrl: './card-two.component.html',
  styleUrls: ['./card-two.component.css']
})
export class CardTwoComponent implements OnInit {

  constructor(
    private _massageSer: CardServicesService
  ) { }

  ngOnInit(): void {
  }

  btnClick(): void {
    const myService = new MassageService();
    myService.massage();
  }

  selectMass(proName: string): void {
    this._massageSer.massageAlert(proName);
  }
}
