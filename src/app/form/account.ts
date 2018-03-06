import {Address} from './address';
import {Gender} from './gender';

export class Account {

  public readonly username: string;
  public readonly password: string;
  public readonly passwordConfirmation: string;
  public readonly name: string;
  public readonly gender: Gender;
  public readonly age: number;
  public readonly email: string;
  public readonly phone: string;
  public readonly address: Address;

  constructor() {
    this.address = new Address();
  }

}
