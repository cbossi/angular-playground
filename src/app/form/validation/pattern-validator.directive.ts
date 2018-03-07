import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, Validators} from '@angular/forms';

@Directive({
  selector: '[pattern]',
  providers: [{provide: NG_VALIDATORS, useExisting: PatternValidatorDirective, multi: true}]
})
export class PatternValidatorDirective implements Validator {

  @Input() pattern: string | RegExp;

  validate(field: AbstractControl): ValidationErrors | null {
    return Validators.pattern(this.pattern)(field);
  }

}
