import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RoutedComponent} from '../shared/routed.component';
import {TitleService} from '../title/title.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends RoutedComponent {

  constructor(activatedRoute: ActivatedRoute,
              titleService: TitleService) {
    super(activatedRoute, titleService);
  }
}

