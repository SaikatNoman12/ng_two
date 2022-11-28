import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor() { }

  radioBtn: any[] = [
    {
      id: '1',
      value: 'Male'
    },
    {
      id: '2',
      value: 'Female'
    },
    {
      id: '3',
      value: 'Both'
    },
  ];


  myRecForm!: FormGroup;

  ngOnInit(): void {

    this.myRecForm = new FormGroup({

      'userDetails': new FormGroup({
        'username': new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.required, Validators.email])
      }),
      'course': new FormControl('css', Validators.required),
      'gender': new FormControl('Male', Validators.required),
    });

  }


  myFormSubmit() {
    console.log(this.myRecForm);
  }



}
