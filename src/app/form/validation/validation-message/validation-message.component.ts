import {Component, Input} from '@angular/core';
import {AbstractControl} from '@angular/forms';

@Component({
  selector: 'validation-message',
  templateUrl: './validation-message.component.html'
})
export class ValidationMessageComponent {

  @Input() field: AbstractControl;
  @Input() name: string;

}
