import { Router, Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NGFORComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  arr: any[] = [];
  onAddData(input: any) {

    if (input.value === '' || input.value.trim() === '') {
      return;
    }
    else if (this.arr.length > 2) {
      this.router.navigate(['products']);
    }
    this.arr.push({
      name: input.value
    });

  }


  removeBtn(index: number) {
    this.arr.splice(index, 1);
  }


}
