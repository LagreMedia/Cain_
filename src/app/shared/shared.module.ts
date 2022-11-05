import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { ContentComponent } from './content/content.component';

/** Angular Material Imports */
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    ContentComponent,
    FooterComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [
    ContentComponent,
    FooterComponent,
    NavComponent
  ]

})
export class SharedModule { }
