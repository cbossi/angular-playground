import {AbstractControl, FormGroup} from '@angular/forms';

export function isInvalid(field: AbstractControl): boolean {
  return field.invalid && (field.dirty || field.touched);
}

export function markAllAsTouched(formControl: AbstractControl): void {
  if (formControl instanceof FormGroup) {
    Object.values(formControl.controls).forEach(control => markAllAsTouched(control));
  }
  formControl.markAsTouched();
}
