import {AbstractControl, FormGroup} from '@angular/forms';
import {RoutedComponent} from '../shared/routed.component';
import {isInvalid, markAllAsTouched} from './form.util';

export abstract class FormComponent extends RoutedComponent {

  public form: FormGroup;

  public isInvalid(field: AbstractControl): boolean {
    return isInvalid(field);
  }

  public submit(): void {
    if (this.form.invalid) {
      markAllAsTouched(this.form);
    } else {
      this.submitValid();
    }
  }

  protected abstract submitValid(): void;

}
