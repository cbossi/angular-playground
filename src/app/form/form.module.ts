import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {AccountInMemoryDataService} from './account/account-in-memory-data.service';
import {AccountHttpClient} from './account/account.http-client';
import {UniqueUsernameValidator, UniqueUsernameValidatorDirective} from './account/unique-username.validator';
import {FormRoutingModule} from './form-routing.module';
import {ReactiveAccountFormComponent} from './reactive-account-form/reactive-account-form.component';
import {TemplateDrivenAccountFormComponent} from './template-driven-account-form/template-driven-account-form.component';
import {EmailAddressValidatorDirective} from './validation/email-address.validator';
import {MaxLengthValidatorDirective} from './validation/max-length-validator.directive';
import {MaxValidatorDirective} from './validation/max-validator.directive';
import {MinLengthValidatorDirective} from './validation/min-length-validator.directive';
import {MinValidatorDirective} from './validation/min-validator.directive';
import {PatternValidatorDirective} from './validation/pattern-validator.directive';
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
    EmailAddressValidatorDirective,
    MinValidatorDirective,
    MinLengthValidatorDirective,
    MaxValidatorDirective,
    MaxLengthValidatorDirective,
    PatternValidatorDirective,
    UniqueUsernameValidatorDirective,
  ],
  providers: [
    AccountHttpClient,
    UniqueUsernameValidator,
  ],
  exports: [
    FormRoutingModule,
  ]
})
export class FormModule {
}
