import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
import {passwordConfirmation} from './password-confirmation.validator';

@Directive({
  selector: '[passwordConfirmation]',
  providers: [{provide: NG_VALIDATORS, useExisting: PasswordConfirmationValidatorDirective, multi: true}]
})
export class PasswordConfirmationValidatorDirective implements Validator {

  @Input()
  public passwordConfirmation: string;

  validate(field: AbstractControl): ValidationErrors | null {
    return passwordConfirmation(this.passwordConfirmation)(field);
  }
}
