import {Component} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import * as _ from 'lodash';
import {TitleService} from '../../title/title.service';
import {Account} from '../account/account';
import {EXISTING_USERNAMES} from '../account/account-in-memory-data.service';
import {Gender} from '../account/gender';
import {passwordConfirmation} from '../account/password-confirmation.validator';
import {UniqueUsernameValidator} from '../account/unique-username.validator';
import {FormComponent} from '../form.component';
import {isInvalid} from '../form.util';

@Component({
  templateUrl: './reactive-account-form.component.html',
})
export class ReactiveAccountFormComponent extends FormComponent {

  public genders = _.values(Gender);

  public existingUsernames = EXISTING_USERNAMES;

  public account: Account;

  constructor(activatedRoute: ActivatedRoute,
              titleService: TitleService,
              formBuilder: FormBuilder,
              usernameValidator: UniqueUsernameValidator) {
    super(activatedRoute, titleService);
    this.form = this.buildForm(formBuilder, usernameValidator);
  }

  private buildForm(formBuilder: FormBuilder, usernameValidator: UniqueUsernameValidator): FormGroup {
    return formBuilder.group({
      username: ['', [Validators.required], [usernameValidator]],
      password: ['', Validators.required],
      passwordConfirmation: ['', (field: AbstractControl) => {
        const password = this.form && this.passwordField ? this.passwordField.value : null;
        return passwordConfirmation(password)(field);
      }],
      name: ['', Validators.required],
      dateOfBirth: [undefined],
      gender: [undefined, Validators.required],
      age: [undefined, [Validators.required, Validators.min(0), Validators.max(150)]],
      email: ['', Validators.email],
      phone: ['', Validators.pattern(/^\+41\d{3,10}$/)],
      address: formBuilder.group({
        street: [''],
        postalCode: ['', [Validators.minLength(4), Validators.maxLength(5)]],
        city: ['', [Validators.required]],
      }),
      acceptTermsAndConditions: [false, Validators.requiredTrue]
    });
  }

  onPasswordChanged() {
    this.passwordConfirmationField.updateValueAndValidity();
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

  get phoneField(): AbstractControl {
    return this.form.get('phone');
  }

  get postalCodeField(): AbstractControl {
    return this.addressGroup.get('postalCode');
  }

  get cityField(): AbstractControl {
    return this.addressGroup.get('city');
  }

  get addressGroup(): AbstractControl {
    return this.form.get('address');
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
