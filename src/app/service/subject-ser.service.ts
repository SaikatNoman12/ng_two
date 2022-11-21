import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectSerService {

  constructor() { }

  uName: any = new Subject<any>()

}
