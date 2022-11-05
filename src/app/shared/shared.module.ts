import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { AppModule } from '../app.module';

@NgModule({
  declarations: [
    FooterComponent,
    NavComponent,
    InputFieldComponent
  ],
  imports: [
    CommonModule
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [
    FooterComponent,
    NavComponent,
    InputFieldComponent
  ]

})
export class SharedModule { }
