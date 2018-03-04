import {AbstractControl, FormControl} from '@angular/forms';

export function needsValidationFeedback(field: AbstractControl): boolean {
  return field.invalid && (field.dirty || field.touched);
}
