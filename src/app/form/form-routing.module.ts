import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ReactiveAccountFormComponent} from './reactive-account-form/reactive-account-form.component';
import {TemplateDrivenAccountFormComponent} from './template-driven-account-form/template-driven-account-form.component';

const routes: Routes = [
  {
    path: 'form',
    data: {title: 'Forms'},
    children: [
      {
        path: 'td',
        component: TemplateDrivenAccountFormComponent,
        data: {title: 'Template Driven Form'}
      },
      {
        path: 'reactive',
        component: ReactiveAccountFormComponent,
        data: {title: 'Reactive Form'}
      },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class FormRoutingModule {

}
