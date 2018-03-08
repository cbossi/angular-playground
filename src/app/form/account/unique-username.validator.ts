import {Injectable} from '@angular/core';
import {AbstractControl, Validator} from '@angular/forms';
import 'rxjs/add/operator/switchMapTo';
import {timer} from 'rxjs/observable/timer';
import {AccountHttpClient} from './account.http-client';

@Injectable()
export class UniqueUsernameValidator implements Validator {

  constructor(private accountHttpClient: AccountHttpClient) {
  }

  validate(field: AbstractControl): any {
    return timer(500)
      .switchMapTo(this.accountHttpClient.getAccounts())
      .map(accounts => accounts.map(account => account.username))
      .map(usernames => usernames.includes(field.value) ? {usernameAlreadyExists: true} : null);
  }

}
