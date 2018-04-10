import {Address} from './address';
import {Country} from './country';
import {Gender} from './gender';

export class Account {

  public username: string;
  public password: string;
  public passwordConfirmation: string;
  public name: string;
  public dateOfBirth: Date;
  public gender: Gender;
  public age: number;
  public nationality: Country;
  public email: string;
  public phone: string;
  public address: Address;
  public acceptTermsAndConditions: boolean;

  constructor() {
    this.address = new Address();
  }

}
