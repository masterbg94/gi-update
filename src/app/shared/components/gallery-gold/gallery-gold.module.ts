import {NgModule} from '@angular/core';


import {GalleryGoldComponent} from './gallery-gold.component';
import {CommonModule} from '@angular/common';
import {Angular2ImageGalleryModule} from 'angular2-image-gallery';


@NgModule({
	imports:[
		CommonModule,
		Angular2ImageGalleryModule

	],
	exports: [
		GalleryGoldComponent
	],
	declarations: [
		GalleryGoldComponent
	]
})

export class GalleryGoldModule{}
