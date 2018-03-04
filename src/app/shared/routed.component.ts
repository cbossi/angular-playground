import {ActivatedRoute} from '@angular/router';
import {TitleService} from '../title/title.service';
import 'rxjs/add/operator/map';

export abstract class RoutedComponent {

  constructor(activatedRoute: ActivatedRoute,
              titleService: TitleService) {
    /* This cannot be done in the AppComponent, since ActivatedRoute cannot be accessed from a component outside the router-outlet:
     * https://stackoverflow.com/a/45737376/6231489
     */
    activatedRoute.data
      .map(data => data.title)
      .subscribe(title => titleService.updateTitle(title));
  }

}
