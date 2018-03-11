import {CommonModule} from '@angular/common';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {AccountInMemoryDataService} from './account/account-in-memory-data.service';
import {AccountHttpClient} from './account/account.http-client';
import {EqualityValidatorDirective} from './account/comparative-value-validator.directive';
import {UniqueUsernameValidatorDirective} from './account/unique-username-validator.directive';
import {UniqueUsernameValidator} from './account/unique-username.validator';
import {FormRoutingModule} from './form-routing.module';
import {ReactiveAccountFormComponent} from './reactive-account-form/reactive-account-form.component';
import {TemplateDrivenAccountFormComponent} from './template-driven-account-form/template-driven-account-form.component';
import {MaxLengthValidatorDirective} from './validation/max-length-validator.directive';
import {MaxValidatorDirective} from './validation/max-validator.directive';
import {MinLengthValidatorDirective} from './validation/min-length-validator.directive';
import {MinValidatorDirective} from './validation/min-validator.directive';
import {ValidationMessageComponent} from './validation/validation-message/validation-message.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forFeature(AccountInMemoryDataService, {passThruUnknownUrl: true}),
    ReactiveFormsModule,
    TranslateModule,
  ],
  declarations: [
    TemplateDrivenAccountFormComponent,
    ReactiveAccountFormComponent,
    EqualityValidatorDirective,
    MinValidatorDirective,
    MinLengthValidatorDirective,
    MaxValidatorDirective,
    MaxLengthValidatorDirective,
    UniqueUsernameValidatorDirective,
    ValidationMessageComponent,
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
