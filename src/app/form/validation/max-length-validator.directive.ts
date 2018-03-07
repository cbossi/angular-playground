import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, Validators} from '@angular/forms';

@Directive({
  selector: '[maxLength]',
  providers: [{provide: NG_VALIDATORS, useExisting: MaxLengthValidatorDirective, multi: true}]
})
export class MaxLengthValidatorDirective implements Validator {

  @Input() maxLength: number;

  validate(field: AbstractControl): ValidationErrors | null {
    return Validators.maxLength(this.maxLength)(field);
  }

}
