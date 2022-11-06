import { Component, OnInit, Input } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent implements OnInit {

  @Input() fieldLabel = '';
  @Input() placeHolder = '';
  @Input() inputType: 'input' | 'number' | 'dropdown' | 'radio' = 'input';
  @Input() list: string[] = [];
  @Input() formControl: any = new FormControl();
  @Input() onError: any = undefined;

  matcher = new MyErrorStateMatcher();
  isRequired = false;

  constructor() { }

  ngOnInit(): void {
    this.isRequired = this.formControl.hasValidator(Validators.required);
  }
}
