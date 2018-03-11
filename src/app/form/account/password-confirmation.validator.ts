import {ValidatorFn} from '@angular/forms';
import {AbstractControl} from '@angular/forms/src/model';

export function passwordConfirmation(password: string): ValidatorFn {
  return (field: AbstractControl) => field.value === password ? null : {passwordConfirmation: true};
}
