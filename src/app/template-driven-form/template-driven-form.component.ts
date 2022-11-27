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
  }

  onUpdate() {
    this.myForm.setValue({
      userDetails: {
        username: 'Noman',
        email: ''
      },
      course: '',
      gander: ''
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



}
