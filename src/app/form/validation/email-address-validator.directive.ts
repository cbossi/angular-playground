import {Directive} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
import {validEmailAddress} from './validation.util';

@Directive({
  selector: '[email-address]',
  providers: [{provide: NG_VALIDATORS, useExisting: EmailAddressValidatorDirective, multi: true}]
})
export class EmailAddressValidatorDirective implements Validator {

  validate(field: AbstractControl): ValidationErrors | null {
    return validEmailAddress()(field);
  }

}
