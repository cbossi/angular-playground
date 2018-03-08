import {Directive} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, Validators} from '@angular/forms';
import {ValidatorFn} from '@angular/forms/src/directives/validators';

// tslint:disable:max-line-length
/* Regular expression for email address. Adopted from: https://stackoverflow.com/a/46181/6231489 */
const VALID_EMAIL_ADDRESS_PATTERN = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// tslint:enable:max-line-length

export function validEmailAddress(): ValidatorFn {
  return Validators.pattern(VALID_EMAIL_ADDRESS_PATTERN);
}

@Directive({
  selector: '[emailAddress]',
  providers: [{provide: NG_VALIDATORS, useExisting: EmailAddressValidatorDirective, multi: true}]
})
export class EmailAddressValidatorDirective implements Validator {

  validate(field: AbstractControl): ValidationErrors | null {
    return validEmailAddress()(field);
  }

}
