import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
