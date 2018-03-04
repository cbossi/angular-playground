import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RoutedComponent} from '../../shared/routed.component';
import {TitleService} from '../../title/title.service';

@Component({
  templateUrl: './reactive-person-form.component.html',
})
export class ReactivePersonFormComponent extends RoutedComponent {

  constructor(activatedRoute: ActivatedRoute,
              titleService: TitleService) {
    super(activatedRoute, titleService);
  }

}
