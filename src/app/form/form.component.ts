import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  contactInfoFormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormControl(''),
    city: new FormControl(''),
    State: new FormControl(''),
    zipCode: new FormControl(''),
    emailAddress: new FormControl(''),
    homePhone: new FormControl(''),
    age: new FormControl(''),
    gender: new FormControl('')
  })
  constructor() { }

  ngOnInit(): void {
  }

}
