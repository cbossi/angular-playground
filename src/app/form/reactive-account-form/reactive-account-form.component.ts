import {Component} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {TitleService} from '../../title/title.service';
import {UsernameValidator} from '../account/username.validator';
import {FormComponent} from '../form.component';
import {isInvalid, validEmailAddress} from '../validation/validation.util';
import {Gender} from '../gender';
import {Account} from '../account';

@Component({
  templateUrl: './reactive-account-form.component.html',
})
export class ReactiveAccountFormComponent extends FormComponent {

  public genders = Object.values(Gender);

  public account: Account;

  constructor(activatedRoute: ActivatedRoute,
              titleService: TitleService,
              formBuilder: FormBuilder,
              usernameValidator: UsernameValidator) {
    super(activatedRoute, titleService);
    this.form = this.buildForm(formBuilder, usernameValidator);
  }

  private buildForm(formBuilder: FormBuilder, usernameValidator: UsernameValidator): FormGroup {
    return formBuilder.group({
      username: ['', [Validators.required], [usernameValidator]],
      password: ['', Validators.required],
      passwordConfirmation: ['', Validators.required],
      name: ['', Validators.required],
      gender: [undefined, Validators.required],
      age: [undefined, [Validators.required, Validators.min(0)]],
      email: ['', validEmailAddress()],
      phone: [''],
      address: formBuilder.group({
        street: [''],
        postalCode: [''],
        city: ['', [Validators.required]],
      }),
      acceptTermsAndConditions: [false]
    });
  }

  get usernameField(): AbstractControl {
    return this.form.get('username');
  }

  get passwordField(): AbstractControl {
    return this.form.get('password');
  }

  get passwordConfirmationField(): AbstractControl {
    return this.form.get('passwordConfirmation');
  }

  get nameField(): AbstractControl {
    return this.form.get('name');
  }

  get genderField(): AbstractControl {
    return this.form.get('gender');
  }

  get ageField(): AbstractControl {
    return this.form.get('age');
  }

  get emailField(): AbstractControl {
    return this.form.get('email');
  }

  get cityField(): AbstractControl {
    return this.form.get('address').get('city');
  }

  get acceptTermsAndConditionsField(): AbstractControl {
    return this.form.get('acceptTermsAndConditions');
  }

  public isInvalid(field: AbstractControl): boolean {
    return isInvalid(field);
  }

  submitValid(): void {
    this.account = Object.assign({}, this.form.value);
  }
}
