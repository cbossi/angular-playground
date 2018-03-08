import {Directive} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
import {validEmailAddress} from './email-address.validator';

@Directive({
  selector: '[emailAddress]',
  providers: [{provide: NG_VALIDATORS, useExisting: EmailAddressValidatorDirective, multi: true}]
})
export class EmailAddressValidatorDirective implements Validator {

  validate(field: AbstractControl): ValidationErrors | null {
    return validEmailAddress()(field);
  }

}
