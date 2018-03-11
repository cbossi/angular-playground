import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
import {equality} from './comparative-value.validator';

@Directive({
  selector: '[equality]',
  providers: [{provide: NG_VALIDATORS, useExisting: EqualityValidatorDirective, multi: true}]
})
export class EqualityValidatorDirective implements Validator {

  @Input()
  public equality: string;

  validate(field: AbstractControl): ValidationErrors | null {
    return equality(this.equality)(field);
  }
}
