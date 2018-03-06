import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Account} from './account';

export class AccountInMemoryDataService implements InMemoryDbService {

  createDb() {
    const accounts = [
      this.createAccount('john'),
      this.createAccount('doe'),
      this.createAccount('max'),
      this.createAccount('muster'),
    ];
    return {accounts};
  }

  private createAccount(username: string): Account {
    const account = new Account();
    account.username = username;
    return account;
  }

}
