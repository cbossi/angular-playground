import {HttpClient} from '@angular/common/http';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {AppRoutingModule} from './app-routing.module';


import {AppComponent} from './app.component';
import {FormModule} from './form/form.module';
import {HomeComponent} from './home/home.component';
import {NavigationComponent} from './navigation/navigation.component';
import {StartupService} from './startup.service';
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
    NgbModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (httpClient: HttpClient) => new TranslateHttpLoader(httpClient),
        deps: [HttpClient]
      },
      isolate: true,
    }),
  ],
  exports: [
    AppRoutingModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (translateService: TranslateService) => () => new StartupService(translateService).onStartup(),
      multi: true,
      deps: [TranslateService]
    },
    TitleService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
