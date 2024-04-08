import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SliderComponent} from './slider.component';
import {SliderItemComponent} from './slider-item.component';
import {RouterModule} from '@angular/router';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule
  ],
  exports: [
    SliderComponent,
    SliderItemComponent
  ],
  declarations: [
    SliderComponent,
    SliderItemComponent
  ]
})
export class SliderModule {
}
