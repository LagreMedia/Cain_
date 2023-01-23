import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


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
  @Input() onError: any = () => {};
  @Input() onKeyUp: any = () => {};

  isRequired = false;

  constructor() { }

  ngOnInit(): void {
    this.isRequired = this.formControl.hasValidator(Validators.required);
  }
}
