import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, Validators} from '@angular/forms';

@Directive({
  selector: '[minLength]',
  providers: [{provide: NG_VALIDATORS, useExisting: MinLengthValidatorDirective, multi: true}]
})
export class MinLengthValidatorDirective implements Validator {

  @Input() minLength: number;

  validate(field: AbstractControl): ValidationErrors | null {
    return Validators.minLength(this.minLength)(field);
  }

}
