import {Component} from '@angular/core';
import {Route, Router} from '@angular/router';
import {NavigationItem} from './navigation-item';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  public readonly items: NavigationItem[];
  public readonly routes: Route[];
  public collapsed = true;

  constructor(router: Router) {
    this.routes = router.config;
    this.items = NavigationItem.ofRoutes(router.config);
  }

  public toggleCollapsed() {
    this.collapsed = !this.collapsed;
  }
}
