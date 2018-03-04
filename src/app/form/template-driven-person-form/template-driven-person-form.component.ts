import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RoutedComponent} from '../../shared/routed.component';
import {TitleService} from '../../title/title.service';

@Component({
  templateUrl: './template-driven-person-form.component.html',
})
export class TemplateDrivenPersonFormComponent extends RoutedComponent {

  constructor(activatedRoute: ActivatedRoute,
              titleService: TitleService) {
    super(activatedRoute, titleService);
  }

}
