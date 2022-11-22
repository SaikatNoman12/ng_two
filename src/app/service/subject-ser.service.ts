import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectSerService {

  constructor() { }

  // uName: any = new Subject<any>()
  uName: any = new BehaviorSubject<any>('Saiful Emon');

}
