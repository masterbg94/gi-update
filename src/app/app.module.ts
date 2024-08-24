import {BrowserModule} from '@angular/platform-browser';
import {NgModule, isDevMode} from '@angular/core';
import {FooterModule} from './shared/components/footer/footer.module';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavMenuModule} from './shared/components/nav-menu/nav-menu.mpodule';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FactsModule} from './shared/components/facts/facts.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {ServiceWorkerModule} from '@angular/service-worker';

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
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      defaultLanguage: 'sr'
    }),
    NgbModule,
    /*
    Konfiguracija za dev.serve.build mora imati
    buildOptimizer,optimization false da bi bio isDevMode()
    sto utice na ServiceWorkerModule
    "development": {
              "buildOptimizer": false,
              "optimization": false,
              "vendorChunk": true,
              "extractLicenses": false,
              "sourceMap": true,
              "namedChunks": true
            }
    */
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 10 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:10000'
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
