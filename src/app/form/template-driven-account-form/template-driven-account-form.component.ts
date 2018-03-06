import {Component, OnInit, ViewChild} from '@angular/core';
import {AbstractControl, NgForm} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {RoutedComponent} from '../../shared/routed.component';
import {TitleService} from '../../title/title.service';
import {FormComponent} from '../form.component';
import {isInvalid, markAllAsTouched} from '../forms';
import {Gender} from '../gender';
import {Account} from '../account';

@Component({
  templateUrl: './template-driven-account-form.component.html',
})
export class TemplateDrivenAccountFormComponent extends FormComponent implements OnInit {

  @ViewChild('accountForm')
  accountForm: NgForm;

  public genders = Object.values(Gender);

  public account: Account;
  public submitted: boolean;

  constructor(activatedRoute: ActivatedRoute,
              titleService: TitleService) {
    super(activatedRoute, titleService);
    this.account = new Account();
    this.submitted = false;
  }

  ngOnInit() {
    this.form = this.accountForm.form;
  }

  public isInvalid(field: AbstractControl): boolean {
    return isInvalid(field);
  }

  submitValid() {
    this.submitted = true;
  }

}
