import {CountryTO} from './country.to';

export class Country extends CountryTO {

  constructor(countryTO: CountryTO) {
    super(countryTO.code, countryTO.name);
  }

  get label(): string {
    return this.code + ' - ' + this.name;
  }

}
