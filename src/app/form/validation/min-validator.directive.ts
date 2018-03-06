import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, Validators} from '@angular/forms';

@Directive({
  selector: '[min]',
  providers: [{provide: NG_VALIDATORS, useExisting: MinValidatorDirective, multi: true}]
})
export class MinValidatorDirective implements Validator {

  @Input() min: number;

  validate(field: AbstractControl): ValidationErrors | null {
    return Validators.min(this.min)(field);
  }

}
