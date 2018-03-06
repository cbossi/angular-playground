import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, Validators} from '@angular/forms';
import {validEmailAddress} from './validation.util';

@Directive({
  selector: '[emailAddress]',
  providers: [{provide: NG_VALIDATORS, useExisting: EmailAddressValidationDirective, multi: true}]
})
export class EmailAddressValidationDirective implements Validator {

  validate(field: AbstractControl): ValidationErrors | null {
    return validEmailAddress()(field);
  }

}
