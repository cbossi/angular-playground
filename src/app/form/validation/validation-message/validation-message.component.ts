import {Component, Input} from '@angular/core';
import {AbstractControl} from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'validation-message',
  templateUrl: './validation-message.component.html'
})
export class ValidationMessageComponent {

  @Input() field: AbstractControl;
  @Input() name: string;

  private nameFallback: string;

  constructor(translateService: TranslateService) {
    translateService.get('FORM.FIELD').subscribe(translatedNameFallback => this.nameFallback = translatedNameFallback);
  }

  get fieldName(): string {
    return this.name || this.nameFallback;
  }

}
