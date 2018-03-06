import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../../environments/environment';
import {Account} from './account';

@Injectable()
export class AccountHttpClient {

  constructor(private httpClient: HttpClient) {
  }

  public getAccounts(): Observable<Account[]> {
    const requestUrl = environment.apiUri + '/accounts';
    return this.httpClient.get<Account[]>(requestUrl);
  }

}
