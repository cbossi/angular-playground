import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {RoutedComponent} from '../../shared/routed.component';
import {TitleService} from '../../title/title.service';
import {needsValidationFeedback} from '../forms';
import {Gender} from '../gender';
import {Person} from '../person';

@Component({
  templateUrl: './reactive-person-form.component.html',
})
export class ReactivePersonFormComponent extends RoutedComponent {

  public personForm: FormGroup;
  public genders = Object.values(Gender);

  public person: Person;

  constructor(activatedRoute: ActivatedRoute,
              titleService: TitleService,
              formBuilder: FormBuilder) {
    super(activatedRoute, titleService);
    this.buildForm(formBuilder);
  }

  private buildForm(formBuilder: FormBuilder) {
    this.personForm = formBuilder.group({
      name: ['', Validators.required],
      gender: [undefined],
      age: [undefined],
      email: [''],
      phone: [''],
      address: formBuilder.group({
        street: [''],
        postalCode: [''],
        city: [''],
      }),
    });
  }

  public needsValidationFeedback(fieldName: string): boolean {
    return needsValidationFeedback(this.personForm.get(fieldName));
  }

  public submit() {
    this.person = Object.assign({}, this.personForm.value);
  }
}
