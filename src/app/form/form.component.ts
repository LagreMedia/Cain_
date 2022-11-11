import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FORM_FIELDS } from './components/formFields';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  contactInfoFormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.maxLength(4)]),
    lastName: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    zipCode: new FormControl('', [Validators.required]),
    emailAddress: new FormControl('', [Validators.required, Validators.email]),
    homePhone: new FormControl('', [Validators.required]),
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

  onSubmit() {
    // TODO
    console.log(this.contactInfoFormGroup.value);
    console.log(this.additionalInfoFormGroup.value);
  }

}
