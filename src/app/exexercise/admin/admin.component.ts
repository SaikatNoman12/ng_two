import { NewServiceService } from './../../service/new-service.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  @Input() adminDataArr: any[] = [];
  @Input() placeHolderText: string = '';
  @Input() adminInput: string = '';
  @Output() adminData: any = new EventEmitter<string>();
  adminDataObj: any = {};

  constructor(private _nService: NewServiceService) { }

  ngOnInit(): void {
  }

  adminAdd(admin: any): void {
    if (admin.value === '' || admin.value.trim() === '') {
      alert("Please Enter Input Text.");
    }
    else {

      this.adminDataObj = {
        name: admin.value
      };

      this.adminData.emit(this.adminDataObj);
      admin.value = '';

    }
  }

}
