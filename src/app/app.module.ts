import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {FormModule} from './form/form.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavigationComponent } from './navigation/navigation.component';
import { TitleComponent } from './title/title.component';
import {TitleService} from './title/title.service';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    TitleComponent,
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
  providers: [
    TitleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
