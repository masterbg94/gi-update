import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Angular2ImageGalleryModule} from 'angular2-image-gallery';
import {Gallery8GoldComponent} from './gallery8-gold.component';

@NgModule({
  imports: [
    CommonModule,
    Angular2ImageGalleryModule
  ],
  exports: [Gallery8GoldComponent],
  declarations: [Gallery8GoldComponent]
})
export class Gallery8GoldModule {
}
