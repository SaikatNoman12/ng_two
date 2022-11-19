import { Component, OnInit } from '@angular/core';
import { CardServicesService } from 'src/app/service/card-services.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(
    private _cardMassageSer: CardServicesService
  ) { }

  
  
  product: string = 'Abdullah Al Nomaan';
  ngOnInit(): void {
    this.product = this._cardMassageSer.productSer;
  }

  proObj: any = this._cardMassageSer.proObjSer;

  proArr:any[] = this._cardMassageSer.proArrSer;

}
