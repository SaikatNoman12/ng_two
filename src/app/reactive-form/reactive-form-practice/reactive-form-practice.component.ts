import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ValueFromArray } from 'rxjs';

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
        'username': new FormControl(null, [Validators.required]),
        'email': new FormControl(null, [Validators.required, Validators.email]),
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

  formDataSubmit(): void {
    console.log(this.myReactiveForm);
  }

}
