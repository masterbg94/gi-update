import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GoogleMapComponent} from './google-map.component';
// import {AgmCoreModule} from 'angular2-google-maps/core';
import {TranslateModule} from "@ngx-translate/core";
import {GoogleMapsModule} from "@angular/google-maps";

@NgModule({
  imports: [
    CommonModule,
    // AgmCoreModule.forRoot({
    // 	apiKey: 'AIzaSyAA8E6qZ_tn6eF5oGpO3Cv_bZR3I5YQN0k'
    // }),
    TranslateModule,
    GoogleMapsModule
  ],
  exports: [
    GoogleMapComponent
  ],
  declarations: [
    GoogleMapComponent
  ]
})
export class GoogleMapModule {
}
