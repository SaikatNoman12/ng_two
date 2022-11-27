import { Component, OnInit, NgModule, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  @ViewChild('refer') myForm!:NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmitForm(refer: NgForm) {
    console.log(this.myForm);
  }

}
