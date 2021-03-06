import {Component, OnInit, ViewChild} from '@angular/core';
import {AbstractControl, NgForm} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import * as _ from 'lodash';
import {Observable} from 'rxjs/Observable';
import {TitleService} from '../../title/title.service';
import {Account} from '../account/account';
import {EXISTING_USERNAMES} from '../account/account-in-memory-data.service';
import {AccountHttpClient} from '../account/account.http-client';
import {Country} from '../account/country';
import {Gender} from '../account/gender';
import {FormComponent} from '../form.component';
import {isInvalid, triggerValidation} from '../form.util';

@Component({
  templateUrl: './template-driven-account-form.component.html',
})
export class TemplateDrivenAccountFormComponent extends FormComponent implements OnInit {

  @ViewChild('accountForm')
  private accountForm: NgForm;

  public genders = _.values(Gender);
  public countries: Observable<Country[]>;
  public existingUsernames = EXISTING_USERNAMES;

  public account: Account;
  public submitted: boolean;

  constructor(activatedRoute: ActivatedRoute,
              titleService: TitleService,
              accountHttpClient: AccountHttpClient) {
    super(activatedRoute, titleService);
    this.countries = accountHttpClient.getCountries();
    this.account = new Account();
    this.submitted = false;
  }

  ngOnInit() {
    this.form = this.accountForm.form;
  }

  onPasswordChanged() {
    triggerValidation(this.accountForm, 'passwordConfirmation');
  }

  public isInvalid(field: AbstractControl): boolean {
    return isInvalid(field);
  }

  submitValid() {
    this.submitted = true;
  }

}
