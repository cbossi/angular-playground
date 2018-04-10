import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../../environments/environment';
import {Account} from './account';
import {Country} from './country';
import {CountryTO} from './country.to';

@Injectable()
export class AccountHttpClient {

  constructor(private httpClient: HttpClient) {
  }

  public getCountries(): Observable<Country[]> {
    const requestUrl = environment.apiUri + '/countries';
    return this.httpClient.get<CountryTO[]>(requestUrl)
      .map(countries => countries.map(countryTO => new Country(countryTO)));
  }

  public getAccounts(): Observable<Account[]> {
    const requestUrl = environment.apiUri + '/accounts';
    return this.httpClient.get<Account[]>(requestUrl);
  }

}
