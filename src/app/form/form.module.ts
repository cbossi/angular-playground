import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {FormRoutingModule} from './form-routing.module';
import {ReactivePersonFormComponent} from './reactive-person-form/reactive-person-form.component';
import {TemplateDrivenPersonFormComponent} from './template-driven-person-form/template-driven-person-form.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    TemplateDrivenPersonFormComponent,
    ReactivePersonFormComponent,
  ],
  exports: [
    FormRoutingModule,
  ]
})
export class FormModule {
}
