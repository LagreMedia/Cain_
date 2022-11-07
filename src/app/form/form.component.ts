import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  US_STATES = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware',
  'District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana',
  'Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota',
  'Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina',
  'North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island',
  'South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington',
  'West Virginia','Wisconsin','Wyoming'];
  contactInfoFormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.maxLength(4)]),
    lastName: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    zipCode: new FormControl('', [Validators.required]),
    emailAddress: new FormControl('', [Validators.required]),
    homePhone: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required])
  });

  contactInfo = {
    firstname: '',
    lastname: ''
  };

  orientationType: 'vertical' | 'horizontal' = 'horizontal';
  @HostListener('window:resize') onWindowResize() {
    if (window.innerWidth <= 600) {
      this.orientationType = 'vertical';
    } else {
      this.orientationType = 'horizontal';
    }
  }

  onError(control: FormControl) {
    if (control.hasError('required')) {
      return "Field is required"
    }
    return ''
  }

  getErrorMessage(formControl: any) {
    if (formControl.hasError('required')) {
      return 'Field is Required';
    }
    return '';
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.contactInfoFormGroup.get('firstName')?.value)
  }

}
