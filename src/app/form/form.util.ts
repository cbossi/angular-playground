import {AbstractControl, FormGroup, Validators} from '@angular/forms';
import {ValidatorFn} from '@angular/forms/src/directives/validators';

// tslint:disable:max-line-length
/* Regular expression for email address. Adopted from: https://stackoverflow.com/a/46181/6231489 */
const VALID_EMAIL_ADDRESS_PATTERN = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// tslint:enable:max-line-length


export function isInvalid(field: AbstractControl): boolean {
  return field.invalid && (field.dirty || field.touched);
}

export function markAllAsTouched(formControl: AbstractControl): void {
  if (formControl instanceof FormGroup) {
    Object.values(formControl.controls).forEach(control => markAllAsTouched(control));
  }
  formControl.markAsTouched();
}
