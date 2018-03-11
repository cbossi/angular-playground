import {ValidatorFn} from '@angular/forms';
import {AbstractControl} from '@angular/forms/src/model';

export function equality(comparativeValue: string): ValidatorFn {
  return (field: AbstractControl) => {
    const fieldValue = field.value;
    return fieldValue === comparativeValue ? null : {comparativeValue: comparativeValue, actualValue: fieldValue};
  };
}
