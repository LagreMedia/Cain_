/*eslint max-len: ["error", { "code": 400 }]*/

import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FORM_FIELDS } from './components/formFields';
import { COPY } from '../shared/copy/copy';
import { address, address2, age, BerkleyLead, CAMPAIGN_CODE, campus_id, city, consent_url, education_level_id, email, firstname, gender, grad_year, ip, lastname, leadTest, level_interest, media_type, military_type, phone1, program_id, service_leadid, signup_url, start_date, state, tcpa_consent, zip } from '../types/berkley-lead';
import { LeadHoopService } from '../services/leadhoop.service';

const ZIP_REGEX = /^\d{5}$/gm;
const PHONE_NUMBER_REGEX = /(^[(][0-9]{3})[)][ ]([0-9]{3})-([0-9]{4}$)/gm;

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  copy = COPY;

  contactInfoFormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    address: new FormControl('', [Validators.required]),
    aptSuiteFloorNum: new FormControl(''),
    city: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    zipCode: new FormControl('', [Validators.required, Validators.pattern(ZIP_REGEX)]),
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
    aptSuiteFloorNum: '',
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

  getErrorMessage(control: any, fieldLabel: string) {
    if (control.hasError('required')) {
      return 'Field is required';
    }
    if (control.hasError('email')) {
      return 'Please enter a valid email';
    }
    if (control.hasError('minLength')) {
      return `${fieldLabel} needs to be at least 2 characters`;
    }
    if (control.hasError('pattern')) {
      if (fieldLabel === 'Home Phone') {
        return 'Phone number must have format: (xxx) xxx-xxxx';
      } else {
        return 'Zipcode must be 5 digits';
      }
    }
    return '';
  }

  constructor(private leadHoopService: LeadHoopService) { }

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

  onKeyUpPhoneNumber(event: any, formControl: FormControl) {
    const keyPressed = event.key;
    const currentValue = formControl.value as string;
    const numbers = currentValue.split('').filter((value) => !isNaN(parseInt(value, 10)));
    const numOfNumbers = numbers.length;
    if (keyPressed === 'Backspace') {
      return;
    }
    switch(numOfNumbers) {
      case 3:
        formControl.setValue(`(${numbers.join('')})`);
        break;
      case 4:
        formControl.setValue(`(${numbers.slice(0, 3).join('')}) ${numbers[3]}`);
        break;
      case 7:
        formControl.setValue(`(${numbers.slice(0, 3).join('')}) ${numbers.slice(3, 6).join('')}-${numbers[6]}`);
        break;
    }
    console.log(formControl.value);
  }

  onSubmit() {
    // TODO
    const contactForm = this.contactInfoFormGroup.value;
    const additionalInfo = this.additionalInfoFormGroup.value;

    const lead: BerkleyLead = {
      campaign_code: CAMPAIGN_CODE,
      [firstname]: contactForm.firstName,
      [lastname]: contactForm.lastName,
      [address]: contactForm.address,
      [address2]: contactForm.aptSuiteFloorNum,
      [city]: contactForm.city,
      [state]: contactForm.state,
      [zip]: contactForm.zipCode,
      [email]: contactForm.emailAddress,
      [phone1]: contactForm.homePhone,
      [age]: contactForm.age,
      [gender]: contactForm.gender,
      [grad_year]: additionalInfo.graduationYear,
      [military_type]: additionalInfo.militaryAffil,
      [education_level_id]: additionalInfo.highestEducation,
      [program_id]: additionalInfo.programOfInterest,
      [campus_id]: additionalInfo.campusPreference,
      [start_date]: additionalInfo.startDate,
      [level_interest]: additionalInfo.motivation,
      [tcpa_consent]: true, // this should come from checkbox
      [service_leadid]: 'TBD',
      [ip]: 'TBD',
      [signup_url]: 'TBD',
      [leadTest]: true,
      [media_type]: 'TBD',
    };
    console.log(lead);
    this.leadHoopService.postLead(lead);
  }

}
