import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Account} from './account';

export const EXISTING_USERNAMES = ['john', 'max'];

export class AccountInMemoryDataService implements InMemoryDbService {

  createDb() {
    const accounts = EXISTING_USERNAMES.map(username => this.createAccount(username));
    return {accounts};
  }

  private createAccount(username: string): Account {
    const account = new Account();
    account.username = username;
    return account;
  }

}
