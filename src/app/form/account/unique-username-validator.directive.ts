import {Directive} from '@angular/core';
import {NG_ASYNC_VALIDATORS} from '@angular/forms';
import {UniqueUsernameValidator} from './unique-username.validator';

@Directive({
  selector: '[uniqueUsername]',
  providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: UniqueUsernameValidator, multi: true}]
})
export class UniqueUsernameValidatorDirective {
}
