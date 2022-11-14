import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FORM_FIELDS } from './components/formFields';

const PHONE_NUMBER_REGEX = /(^[0-9]{3})-([0-9]{3})-([0-9]{4}$)/gm;
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  contactInfoFormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    zipCode: new FormControl('', [Validators.required]),
    emailAddress: new FormControl('', [Validators.required, Validators.email]),
    homePhone: new FormControl('', [Validators.required, Validators.pattern(PHONE_NUMBER_REGEX)]),
    age: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required])
  });

  contactInfoFormNotComplete = true;
  formFields = FORM_FIELDS;

  additionalInfoFormGroup = new FormGroup({
    graduationYear: new FormControl('', [Validators.required]),
    militaryAffil: new FormControl('', [Validators.required]),
    highestEducation: new FormControl('', [Validators.required]),
    campusPreference: new FormControl('', [Validators.required]),
    programOfInterest: new FormControl('', [Validators.required]),
    startDate: new FormControl('', [Validators.required]),
    motivation: new FormControl('', [Validators.required])
  });
  additionalInfoFormNotComplete = true;

  contactInfo = {
    firstname: '',
    lastname: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    emailAddress: '',
    homePhone: '',
    age: 0,
    gender: ''
  };

  additionalInfo = {
    graduationYear: '',
    militaryAffil: '',
    highestEducation: '',
    campusPreference: '',
    programOfInterest: '',
    startDate: '',
    motivation: '',
  };

  orientationType: 'vertical' | 'horizontal' = 'horizontal';
  @HostListener('window:resize') onWindowResize() {
    if (window.innerWidth <= 600) {
      this.orientationType = 'vertical';
    } else {
      this.orientationType = 'horizontal';
    }
  }

  getErrorMessage(control: any) {
    if (control.hasError('required')) {
      return 'Field is required';
    }
    if (control.hasError('email')) {
      return 'Please enter a valid email';
    }
    if (control.hasError('pattern')) {
      return 'Phone number must have format: xxx-xxx-xxxx';
    }
    return '';
  }

  constructor() { }

  ngOnInit(): void {
    this.contactInfoFormGroup.valueChanges.subscribe((value) => {
      // value is a key value pair of each form control value
      for (const key in Object.keys(value)) {
        if (key) {
          this.contactInfoFormNotComplete = value[key] === '' || !this.contactInfoFormGroup.valid;
        }
      }
    });
    this.additionalInfoFormGroup.valueChanges.subscribe((value) => {
      // value is a key value pair of each form control value
      for (const key in Object.keys(value)) {
        if (key) {
          this.additionalInfoFormNotComplete = value[key] === '' || !this.additionalInfoFormGroup.valid;
        }
      }
    });
  }

  onInteraction(step: 'contact' | 'additional') {
    switch (step) {
      case 'contact':
        if (this.contactInfoFormNotComplete) {
          window.alert('Contact Information Form Not Complete!');
        }
        break;
      case 'additional':
        if (this.additionalInfoFormNotComplete) {
          window.alert('Additional Information Form Not Complete!');
        }
        break;
    }
  }

  onSubmit() {
    // TODO
    console.log(this.contactInfoFormGroup.value);
    console.log(this.additionalInfoFormGroup.value);
  }

}
