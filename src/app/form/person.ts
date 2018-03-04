import {Address} from './address';
import {Gender} from './gender';

export class Person {

  public readonly name: string;
  public readonly gender: Gender;
  public readonly age: number;
  public readonly email: string;
  public readonly phone: string;
  public readonly address: Address;

}
