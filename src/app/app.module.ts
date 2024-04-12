import {BrowserModule} from '@angular/platform-browser';
import {NgModule, isDevMode} from '@angular/core';

import {FooterModule} from './shared/components/footer/footer.module';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavMenuModule} from './shared/components/nav-menu/nav-menu.mpodule';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// import {GoogleMapModule} from './shared/components/google-map/google-map.module';
import {FactsModule} from './shared/components/facts/facts.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import { ServiceWorkerModule } from '@angular/service-worker';
// export function createTranslateLoader(http: Http) {
//   return new TranslateStaticLoader(http, './assets/i18n', '.json');
// }
// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    NavMenuModule,
    FooterModule,
    FactsModule,
    // NgbModule.forRoot(),
    // GoogleMapModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      defaultLanguage: 'sr'
    }),
    NgbModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
