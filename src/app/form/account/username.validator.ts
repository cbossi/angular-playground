import {Directive, Injectable} from '@angular/core';
import {AbstractControl, NG_ASYNC_VALIDATORS, Validator} from '@angular/forms';
import 'rxjs/add/operator/switchMapTo';
import {timer} from 'rxjs/observable/timer';
import {AccountHttpClient} from './account.http-client';

@Injectable()
export class UsernameValidator implements Validator {

  constructor(private accountHttpClient: AccountHttpClient) {
  }

  validate(field: AbstractControl): any {
    return timer(500)
      .switchMapTo(this.accountHttpClient.getAccounts())
      .map(accounts => accounts.map(account => account.username))
      .map(usernames => usernames.includes(field.value) ? {usernameAlreadyExists: true} : null);
  }

}

@Directive({
  selector: '[unique-username]',
  providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: UsernameValidator, multi: true}]
})
export class UsernameValidatorDirective {
}
