import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MapComponent} from './map.component';
import {GoogleMapModule} from '../google-map/google-map.module';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    GoogleMapModule,
    TranslateModule
  ],
  exports: [
    MapComponent
  ],
  declarations: [
    MapComponent
  ]
})
export class MapModule {
}
