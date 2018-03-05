import {Component, OnInit, ViewChild} from '@angular/core';
import {AbstractControl, NgForm} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {RoutedComponent} from '../../shared/routed.component';
import {TitleService} from '../../title/title.service';
import {FormComponent} from '../form.component';
import {isInvalid, markAllAsTouched} from '../forms';
import {Gender} from '../gender';
import {Person} from '../person';

@Component({
  templateUrl: './template-driven-person-form.component.html',
})
export class TemplateDrivenPersonFormComponent extends FormComponent implements OnInit {

  @ViewChild('personForm')
  personForm: NgForm;

  public genders = Object.values(Gender);

  public person: Person;
  public submitted: boolean;

  constructor(activatedRoute: ActivatedRoute,
              titleService: TitleService) {
    super(activatedRoute, titleService);
    this.person = new Person();
    this.submitted = false;
  }

  ngOnInit() {
    this.form = this.personForm.form;
  }

  public isInvalid(field: AbstractControl): boolean {
    return isInvalid(field);
  }

  submitValid() {
    this.submitted = true;
  }

}
