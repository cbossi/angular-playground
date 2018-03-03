import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TemplateDrivenPersonFormComponent} from './template-driven-person-form/template-driven-person-form.component';
import {ReactivePersonFormComponent} from './reactive-person-form/reactive-person-form.component';
import {RouterModule} from '@angular/router';
import {FormRoutingModule} from './form-routing.module';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    TemplateDrivenPersonFormComponent,
    ReactivePersonFormComponent,
  ],
  exports: [
    FormRoutingModule,
  ]
})
export class FormModule {
}
