import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from './app-routing.module';


import {AppComponent} from './app.component';
import {FormModule} from './form/form.module';
import {HomeComponent} from './home/home.component';
import {NavigationComponent} from './navigation/navigation.component';
import {TitleComponent} from './title/title.component';
import {TitleService} from './title/title.service';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    TitleComponent,
    HomeComponent,
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
