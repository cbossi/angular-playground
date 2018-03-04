import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {TitleService} from './title.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
})
export class TitleComponent {

  title: Observable<string>;

  constructor(titleService: TitleService) {
    this.title = titleService.title;
  }

}
