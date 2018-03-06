import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, Validators} from '@angular/forms';

@Directive({
  selector: '[min]',
  providers: [{provide: NG_VALIDATORS, useExisting: MinValidationDirective, multi: true}]
})
export class MinValidationDirective implements Validator {

  @Input() min: number;

  validate(field: AbstractControl): ValidationErrors | null {
    return Validators.min(this.min)(field);
  }

}
