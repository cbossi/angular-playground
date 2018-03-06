import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {AccountInMemoryDataService} from './account/account-in-memory-data.service';
import {AccountHttpClient} from './account/account.http-client';
import {UsernameValidator, UsernameValidatorDirective} from './account/username.validator';
import {FormRoutingModule} from './form-routing.module';
import {ReactiveAccountFormComponent} from './reactive-account-form/reactive-account-form.component';
import {TemplateDrivenAccountFormComponent} from './template-driven-account-form/template-driven-account-form.component';
import {EmailAddressValidationDirective} from './validation/email-address-validation.directive';
import {MinValidationDirective} from './validation/min-validation.directive';
import {ValidationMessageComponent} from './validation/validation-message/validation-message.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(AccountInMemoryDataService),
    ReactiveFormsModule
  ],
  declarations: [
    TemplateDrivenAccountFormComponent,
    ReactiveAccountFormComponent,
    ValidationMessageComponent,
    EmailAddressValidationDirective,
    MinValidationDirective,
    UsernameValidatorDirective,
  ],
  providers: [
    AccountHttpClient,
    UsernameValidator,
  ],
  exports: [
    FormRoutingModule,
  ]
})
export class FormModule {
}
