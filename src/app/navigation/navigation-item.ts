import {Routes} from '@angular/router';

export class NavigationItem {

  constructor(public readonly title: string,
              public readonly path: string,
              public readonly children: NavigationItem[]) {
  }

  public static ofRoutes(routes: Routes): NavigationItem[] {
    return routes
      .filter(route => route.data && route.data.title)
      .map(route => {
        const children = route.children ? NavigationItem.ofRoutes(route.children) : undefined;
        return new NavigationItem(route.data.title, route.path, children);
      });
  }

}
