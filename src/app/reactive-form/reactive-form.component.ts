import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, EmailValidator, Form, FormArray, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

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

  myStatus: any;

  nameValidator: any[] = ['noman', 'jasim'];

  ngOnInit(): void {

    this.myRecForm = new FormGroup({

      'userDetails': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.userNameValidate.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email, this.emailValidateMethod.bind(this)]),
        'verified-email': new FormControl(null, [Validators.required, Validators.email], [this.asyncValidatorsRecForm])
      }),
      'course': new FormControl('select', Validators.required),
      'gender': new FormControl('Male', Validators.required),
      'skills': new FormArray([
        new FormControl(null, Validators.required),
      ])
    });


    // valueChanges:-
    /* 
    this.myRecForm.valueChanges.subscribe((value: any) => {
      console.log(value);
    }); 
    */

    // statusChanges:-
    this.myRecForm.statusChanges.subscribe((status: any) => {
      this.myStatus = status;
    });

    // setValue:-
    /*  
    setTimeout(() => {
       this.myRecForm.setValue({
         'userDetails': {
           'username': '',
           'email': '',
           'verified-email': ''
         },
         'course': 'angular',
         'gender': 'Male',
         'skills': [
           'JavaScript'
         ]
       });
     }, 4000); 
     */

    // patchValue:-

    setTimeout(() => {
      this.myRecForm.patchValue({
        'userDetails': {
          'username': 'Rahim',
          'verified-email':'kkl@com'
        },
        'course': 'angular',
        'skills':[
          'javaScript'
        ]
      })
    }, 2000);

  }

  asyncValidatorsRecForm(control: AbstractControl):
    Promise<ValidationErrors | null | any> | Observable<any> {

    const response = new Promise<any>((resolve, reject) => {

      setTimeout(() => {
        if (control.value === 'kkk@gmail.com') {
          resolve({ 'emailNotAllowed': true });
        }
        else {
          resolve(null);
        }
      }, 5000);

    });

    return response;
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

    
    // use for reset:--
    /* 
    this.myRecForm.reset(); 
    */

    // use for reset adn set value:--
    this.myRecForm.reset({
      'userDetails':{

      },

      'course':'select',
      'gender':'Male'
    })

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
