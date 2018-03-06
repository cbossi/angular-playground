import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormRoutingModule} from './form-routing.module';
import {ReactiveAccountFormComponent} from './reactive-account-form/reactive-account-form.component';
import {TemplateDrivenAccountFormComponent} from './template-driven-account-form/template-driven-account-form.component';
import {EmailAddressValidationDirective} from './validation/email-address-validation.directive';
import {MinValidationDirective} from './validation/min-validation.directive';
import { ValidationMessageComponent } from './validation/validation-message/validation-message.component';

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
    EmailAddressValidationDirective,
    ValidationMessageComponent,
  ],
  exports: [
    FormRoutingModule,
  ]
})
export class FormModule {
}
