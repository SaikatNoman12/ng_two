import { Component, OnInit, NgModule, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  @ViewChild('refer') myForm!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  genders: any[] = [
    { id: '1', value: 'Male' },
    { id: '2', value: 'Female' },
    { id: '3', value: 'Both' }
  ];

  mySelect: string = 'Angular';

  showData: string = '';
  showDefaultData: string = 'Karim Khan';
  defaultGender: string = 'Male';

  showFormData: boolean = false;

  onFormData: any = {
    uname: '',
    email: '',
    course: '',
    gender: ''
  }

  onSubmitForm(refer: NgForm) {
    this.onFormData.uname = this.myForm.value.userDetails.username;
    this.onFormData.email = this.myForm.value.userDetails.email;
    this.onFormData.course = this.myForm.value.course;
    this.onFormData.gender = this.myForm.value.gander;
    this.showFormData = true;

    // only reset:-
    /*
    this.myForm.reset(); 
    */

    // rest set value:-
    this.myForm.reset({
      'userDetails': {
        'username': 'Rahim Khana'
      },
      'gender': 'Male',
      'course': 'Angular'
    })

  }

  onUpdate() {
    this.myForm.setValue({
      userDetails: {
        username: 'Noman',
        email: ''
      },
      course: '',
      gander: 'Male'
    });

    this.showFormData = false;
  }

  updateUserName() {
    this.myForm.form.patchValue({
      userDetails: {
        username: 'Rahim Khana'
      }
    });

    this.showFormData = false;
  }






  @ViewChild('referData') myNewForm!: NgForm;

  defaultUname: string = '';
  defaultEmail: string = '';
  defaultSelect: string = 'Angular';
  defaultCheck: string = 'Male';

  gendersData: any[] = [
    { id: '4', value: 'Male' },
    { id: '5', value: 'Female' },
    { id: '6', value: 'Both' },
  ]

  myFormData2: any = {
    uname: '',
    email: '',
    course: '',
    gender: ''
  }

  showUserDetails2: boolean = false;

  onSubmitFormData(refer: NgForm) {
    this.myFormData2.uname = refer.value.userDetailsData.username;
    this.myFormData2.email = refer.value.userDetailsData.email;
    this.myFormData2.course = refer.value.course;
    this.myFormData2.gender = refer.value.gendersData;

    this.showUserDetails2 = true;

    // only reset:-
    /*
    this.myForm.reset(); 
    */

    // rest set value:-
    this.myForm.reset({
      'userDetails': {
        'username': 'Rahim Khana'
      },
      'gender': 'Male',
      'course': 'Angular'
    })
  }


  setDefaultValue2() {
    this.myNewForm.setValue({
      userDetailsData: {
        username: 'Rabii Amjad',
        email: ''
      },
      course: '',
      gendersData: ''
    });
    this.showUserDetails2 = false;
  }

  setPatchValue2() {
    this.myNewForm.form.patchValue({
      userDetailsData: {
        username: 'Karim Banjema'
      }
    });
    this.showUserDetails2 = false;
  }








}
