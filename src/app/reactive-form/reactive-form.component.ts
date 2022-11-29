import { Component, OnInit } from '@angular/core';
import { EmailValidator, Form, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

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

  nameValidator: any[] = ['noman', 'jasim'];

  ngOnInit(): void {

    this.myRecForm = new FormGroup({

      'userDetails': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.userNameValidate.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email, this.emailValidateMethod.bind(this)])
      }),
      'course': new FormControl('select', Validators.required),
      'gender': new FormControl('Male', Validators.required),
      'skills': new FormArray([
        new FormControl(null, Validators.required),
      ])
    });
  }

  userNameValidate(control: FormControl) {
    if (this.nameValidator.indexOf(control.value?.toLowerCase()) !== -1) {
      return { 'name_validate': true }
    }
    return null;
  }

  get skills() {
    return this.myRecForm.controls['skills'] as FormArray;
  }


  myFormSubmit() {
    console.log(this.myRecForm);
  }

  onAddData() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.myRecForm.get('skills')).push(control);
  }



  emailValidate: any[] = ['abc@abc', 'noman@noman'];

  emailValidateMethod(control: FormControl) {
    if (this.emailValidate.indexOf(control.value) !== -1) {
      return { 'email-valid': true };
    }
    return null;
  }


}
