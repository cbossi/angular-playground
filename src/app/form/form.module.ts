import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormRoutingModule} from './form-routing.module';
import {ReactivePersonFormComponent} from './reactive-person-form/reactive-person-form.component';
import {TemplateDrivenPersonFormComponent} from './template-driven-person-form/template-driven-person-form.component';
import {MinValidationDirective} from './template-driven-person-form/validation/min-validation.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    TemplateDrivenPersonFormComponent,
    ReactivePersonFormComponent,
    MinValidationDirective,
  ],
  exports: [
    FormRoutingModule,
  ]
})
export class FormModule {
}
