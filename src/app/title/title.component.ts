import { Component, OnInit } from '@angular/core';
import {TitleService} from './title.service';
import {Observable} from 'rxjs/Observable';

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
