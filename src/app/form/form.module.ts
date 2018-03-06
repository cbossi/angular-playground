import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormRoutingModule} from './form-routing.module';
import {ReactiveAccountFormComponent} from './reactive-account-form/reactive-account-form.component';
import {TemplateDrivenAccountFormComponent} from './template-driven-account-form/template-driven-account-form.component';
import {MinValidationDirective} from './template-driven-account-form/validation/min-validation.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    TemplateDrivenAccountFormComponent,
    ReactiveAccountFormComponent,
    MinValidationDirective,
  ],
  exports: [
    FormRoutingModule,
  ]
})
export class FormModule {
}
