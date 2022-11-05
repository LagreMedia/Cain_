import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormComponent } from './form.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: FormComponent }
    ])
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
})
export class FormModule { }
