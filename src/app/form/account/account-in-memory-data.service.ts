import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Account} from './account';
import {CountryTO} from './country.to';

export const EXISTING_USERNAMES = ['john', 'max'];

export class AccountInMemoryDataService implements InMemoryDbService {

  public createDb() {
    const accounts = this.createAccounts();
    const countries = this.createCountries();
    return {
      accounts: accounts,
      countries: countries
    };
  }

  private createAccounts() {
    return EXISTING_USERNAMES.map(username => this.createAccount(username));
  }

  private createAccount(username: string): Account {
    const account = new Account();
    account.username = username;
    return account;
  }

  private createCountries(): CountryTO[] {
    return [
      new CountryTO('CH', 'Switzerland'),
      new CountryTO('SW', 'Sweden'),
      new CountryTO('DE', 'Germany'),
      new CountryTO('FR', 'France'),
      new CountryTO('IT', 'Italy'),
      new CountryTO('GB', 'England'),
    ];
  }

}
