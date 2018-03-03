import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {FormModule} from './form/form.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavigationComponent } from './navigation/navigation.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormModule,
    NgbModule.forRoot()
  ],
  exports: [
    AppRoutingModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
