import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TemplateDrivenPersonFormComponent} from './template-driven-person-form/template-driven-person-form.component';
import {ReactivePersonFormComponent} from './reactive-person-form/reactive-person-form.component';

const routes: Routes = [
  {
    path: 'form',
    data: { title: 'Forms' },
    children: [
      {
        path: 'td',
        component: TemplateDrivenPersonFormComponent,
        data: { title: 'Template Driven' }
      },
      {
        path: 'reactive',
        component: ReactivePersonFormComponent,
        data: { title: 'Reactive' }
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
