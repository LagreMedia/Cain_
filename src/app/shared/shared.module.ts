import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    FooterComponent,
    NavComponent
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
    NavComponent
  ]

})
export class SharedModule { }
