import {AbstractControl, FormGroup, NgForm} from '@angular/forms';
import * as _ from 'lodash';

// tslint:disable:max-line-length
/* Regular expression for email address. Adopted from: https://stackoverflow.com/a/46181/6231489 */
const VALID_EMAIL_ADDRESS_PATTERN = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// tslint:enable:max-line-length


export function isInvalid(field: AbstractControl): boolean {
  return field.invalid && (field.dirty || field.touched);
}

/**
 * Manually triggers validation of a form field.
 * Can be used if an external input of a form validator changes to ensure that the respective field is validated again.
 *
 * @param {NgForm} form the form containing the field to be validated
 * @param {string} fieldName the name of the field to be validated
 */
export function triggerValidation(form: NgForm, fieldName: string): void {
  const field = form.controls[fieldName];
  field.updateValueAndValidity();
}

export function markAllAsTouched(formControl: AbstractControl): void {
  if (formControl instanceof FormGroup) {
    _.values(formControl.controls).forEach(control => markAllAsTouched(control));
  }
  formControl.markAsTouched();
}
