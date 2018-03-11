import {TranslateService} from '@ngx-translate/core';

const LANGUAGE_EN = 'en';
const LANGUAGE_DE = 'de';
const LANGUAGES = [LANGUAGE_EN, LANGUAGE_DE];

export class StartupService {

  constructor(private translateService: TranslateService) {
  }

  public onStartup(): Promise<void> {
    this.setupLanguages();
    return new Promise<void>((resolve) => {
      resolve();
    });
  }

  private setupLanguages() {
    this.translateService.addLangs(LANGUAGES);
    this.translateService.setDefaultLang(LANGUAGE_EN);
    this.translateService.use(this.loadCurrentLanguage());
  }

  private loadCurrentLanguage(): string {
    const browserLanguage = this.getBrowserLanguage();
    return browserLanguage ? browserLanguage : LANGUAGE_EN;
  }

  private getBrowserLanguage() {
    const browserLanguage = this.translateService.getBrowserLang();
    return LANGUAGES.find(language => language === browserLanguage);
  }

}
