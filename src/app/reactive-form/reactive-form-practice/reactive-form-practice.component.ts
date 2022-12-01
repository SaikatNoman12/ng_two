import { FormGroup, FormControl, Validators, FormArray, AbstractControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { elementAt, ValueFromArray } from 'rxjs';
import { ElementSchemaRegistry } from '@angular/compiler';

@Component({
  selector: 'app-reactive-form-practice',
  templateUrl: './reactive-form-practice.component.html',
  styleUrls: ['./reactive-form-practice.component.css']
})
export class ReactiveFormPracticeComponent implements OnInit {

  myReactiveForm!: FormGroup;

  genders: any[] = [
    { id: '11', genderType: 'Male' },
    { id: '22', genderType: 'Female' },
    { id: '33', genderType: 'Both' },
  ];

  constructor() { }

  ngOnInit(): void {

    this.myReactiveForm = new FormGroup({
      'userDetails': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.customValidations.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email, this.emailValidate.bind(this)]),
      }),
      'course': new FormControl('select', [Validators.required]),
      'gender': new FormControl('Male', [Validators.required]),
      'skill': new FormArray([
        new FormControl(null, [Validators.required]),
      ])
    });

    // use for valueChanges:-
    /* 
    this.myReactiveForm.controls['skill'].valueChanges.subscribe(res => {
      console.log(res);
    }); 
    */

  }

  get skills() {
    // return this.myReactiveForm.get('skill') as FormArray;
    return this.myReactiveForm.controls['skill'] as FormArray;
  }

  removeBtnAble: any = true;
  addSkill(): void {
    const control = new FormControl(null, Validators.required);
    // Use FormArray any code;
    /* 
    (<FormArray>this.myReactiveForm.controls['skill']).push(control); 
    */
    (<FormArray>this.myReactiveForm.get('skill')).push(control);

    // get formArray;
    const skillLength = this.myReactiveForm.get('skill')?.value;

    if (skillLength.length > 1) {
      this.removeBtnAble = false;
    }


  }

  removeSkill(): void {
    const lengthSkill = this.myReactiveForm.controls['skill'].value;
    const control = this.myReactiveForm.controls['skill'] as FormArray;

    if (lengthSkill.length > 1) {
      control.removeAt(lengthSkill?.length - 1, {
        emitEvent: true
      });
    }
    if (lengthSkill.length <= 2) {
      this.removeBtnAble = true;
    }

  }


  names: any[] = ['rahim', 'karim'];



  customValidations(control: FormControl) {

    if (this.names.indexOf(control.value?.toLowerCase()) !== -1) {
      return { 'myValidation': true };
    }
    else {
      return null;
    }

  }


  emailValidation: any[] = ['rahim@rahim', 'karim@karim'];

  emailNumAra: any[] = [
    { id: '1', emaill: 'abc@abc' },
    { id: '2', emaill: 'bcd@bcd' }
  ]

  emailValidate(control: FormControl) {

    // let arr;
    // for (let i = 0; i < this.emailNumAra.length; i++) {
    //   arr = this.emailNumAra[i];
    //   if(arr.emaill === control.value?.toLowerCase()){
    //     return {'emailNotValid':true}
    //   }
    // }
    // return null;

    const getMail = this.emailNumAra.find(ele => ele.emaill.toLowerCase() === control.value?.toLowerCase());

    if (getMail) {
      return { 'emailNotValid': true }
    }
    else {
      return null;
    }


  }


  formDataSubmit(): void {
    console.log(this.myReactiveForm);
  }

}
