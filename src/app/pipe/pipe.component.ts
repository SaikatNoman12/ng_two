import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  pipeData: string = 'This is text';

  percentPipe: number = 200;

  decimalPipe: number = 3.6;

  dataDate: any = new Date();

  constructor() { }

  ngOnInit(): void {

  }

  namesArr:any[] = [
    {name:'Rahim Khan Don'},
    {name:'Mahin Khan'},
    {name:'Hossen Johone'},
    {name:'Khan Mia'},
    {name:'Hasnat'},
    {name:'Mahir'},
  ]

}
