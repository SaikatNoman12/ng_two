import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SubjectSerService } from './../service/subject-ser.service';
import { Component, Input, OnInit } from '@angular/core';
import { GgetApiService } from '../service/gget-api.service';

@Component({
  selector: 'app-subject-component',
  templateUrl: './subject-component.component.html',
  styleUrls: ['./subject-component.component.css']
})
export class SubjectComponentComponent implements OnInit {

  @Input() placeHolderText: string = '';

  userName: string = '';
  apiData: string = '';


  constructor(
    private _myService: SubjectSerService,
    private http: HttpClient
  ) {
    _myService.uName.subscribe((uName: any) => {
      this.userName = uName;
    });
  }

  ngOnInit(): void {
    this.users().subscribe(data => {
      console.log(data);
    });
  }

  users(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

}
