import {Component} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {TitleService} from '../../title/title.service';
import {FormComponent} from '../form.component';
import {isInvalid} from '../forms';
import {Gender} from '../gender';
import {Person} from '../person';

@Component({
  templateUrl: './reactive-person-form.component.html',
})
export class ReactivePersonFormComponent extends FormComponent {

  public genders = Object.values(Gender);

  public person: Person;

  constructor(activatedRoute: ActivatedRoute,
              titleService: TitleService,
              formBuilder: FormBuilder) {
    super(activatedRoute, titleService);
    this.form = this.buildForm(formBuilder);
  }

  private buildForm(formBuilder: FormBuilder): FormGroup {
    return formBuilder.group({
      name: ['', Validators.required],
      gender: [undefined, Validators.required],
      age: [undefined, [Validators.required, Validators.min(0)]],
      email: [''],
      phone: [''],
      address: formBuilder.group({
        street: [''],
        postalCode: [''],
        city: ['', [Validators.required]],
      }),
    });
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

  public isInvalid(field: AbstractControl): boolean {
    return isInvalid(field);
  }

  submitValid(): void {
    this.person = Object.assign({}, this.form.value);
  }
}
