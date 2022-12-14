import { FormGroup, FormControl, Validators, FormArray, AbstractControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { elementAt, Observable } from 'rxjs';
import { ElementSchemaRegistry } from '@angular/compiler';
import { emailValidator } from 'src/app/Directive/email-validator-directive.directive';
import { practiceValidateEmail } from 'src/app/Directive/practice-reactive-form-email.directive';

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

  myStatusChanges: any;

  constructor() { }

  ngOnInit(): void {

    this.myReactiveForm = new FormGroup({
      'userDetails': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.customValidations.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email, this.emailValidate.bind(this), practiceValidateEmail()]),
        'verify-email': new FormControl(null, [Validators.email, Validators.required, this.emailValidate.bind(this), emailValidator()], this.asyncValidation),
        'two-step-verification': new FormControl(null, [Validators.email, Validators.required, this.emailValidate.bind(this)], this.asyncValidation)
      }),
      'course': new FormControl('not-select', [Validators.required]),
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

    /* // valueChanges:--  
     this.myReactiveForm.valueChanges.subscribe(res => {
       console.log(res);
     }); 
    */

    /* // valueChanges get any values:--   
     this.myReactiveForm.get('userDetails.email')?.valueChanges.subscribe(res => {
       console.log(res);
     }); 
    */

    // statusChanges:-
    this.myReactiveForm.statusChanges.subscribe(status => {
      this.myStatusChanges = status;
    });


    // setValue():--
    setTimeout(() => {
      this.myReactiveForm.setValue({
        'userDetails': {
          'username': 'noman',
          'email': '',
          'verify-email': 'fff@sdfsdf',
          'two-step-verification': '',
        },
        'course': 'not-select',
        'gender': 'Male',
        'skill': [
          '',
        ],
      });
    }, 2000);


    // patchValue():--
    setTimeout(() => {
      this.myReactiveForm.patchValue({
        'userDetails': {
          'username': 'Rahim Khan Uddin',
          'verify-email': 'fff@ffff',
          'two-step-verification': '',
        },
      });
    }, 10000);

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

  /* // Use for verify mail validation:-
  dataStore: string = '';
  [attr.disabled]="emailUserData ? null : true"
  get emailUserData() {
    let cc = this.myReactiveForm.get('userDetails.email')?.value;
    if (cc) {
      this.dataStore = cc;
    }
    let findAt = this.dataStore.split('').reverse().find((ele) => ele === '@');
    if (findAt) {
      return true;
    }
    else {
      return null;
    }
  } 
  */


  asyncValidation(control: AbstractControl): Promise<any> | Observable<any> {

    const promData = new Promise((resolve, reject) => {

      setTimeout(() => {
        if (control.value?.toLowerCase() === 'kkk@kkk') {
          resolve({ 'verifyEmail': true });
        }
        else {
          resolve(null);
        }
      }, 3000);

    });

    return promData;

  }


  get verifyEmail() {
    return this.myReactiveForm.get('userDetails.verify-email')!;
  }


  onResetForm() {
    this.myReactiveForm.reset({
      'userDetails': {
        'username': '',
        'email': '',
        'verify-email': '',
        'two-step-verification': '',
      },
      'course': 'not-select',
      'gender': 'Male',
      'skill': [
        '',
      ]
    });
  }

  formDataSubmit(): void {
    console.log(this.myReactiveForm);
  }

}
