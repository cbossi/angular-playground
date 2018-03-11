import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {Observable} from 'rxjs/Observable';
import {NavigationItem} from './navigation-item';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  public readonly items: NavigationItem[];
  public collapsed = true;

  public languages: string[];
  public currentLanguage: Observable<string>;

  constructor(router: Router,
              private translateService: TranslateService) {
    this.items = NavigationItem.ofRoutes(router.config);
    this.languages = translateService.getLangs();
    this.currentLanguage = translateService.onLangChange.map(event => event.lang);
  }

  public changeLanguage(language: string) {
    this.translateService.use(language);
    this.toggleCollapsed();
  }

  public toggleCollapsed() {
    this.collapsed = !this.collapsed;
  }
}
