import { GgetApiService } from './../service/gget-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-api-data',
  templateUrl: './get-api-data.component.html',
  styleUrls: ['./get-api-data.component.css']
})
export class GetApiDataComponent implements OnInit {

  constructor(private _apiGet:GgetApiService) { }

  products: any;

  ngOnInit(): void {
    this._apiGet.users().subscribe(
      proData => this.products = proData
    );
  }

  

}
