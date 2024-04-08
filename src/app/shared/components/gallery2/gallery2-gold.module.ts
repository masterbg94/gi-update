import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';

import {Gallery2GoldComponent} from './gallery2-gold.component';
import {Angular2ImageGalleryModule} from 'angular2-image-gallery';


@NgModule({
	imports:[
		CommonModule,
		Angular2ImageGalleryModule

	],
	exports: [
		Gallery2GoldComponent
	],
	declarations: [
		Gallery2GoldComponent
	]
})

export class GalleryGold2Module{}
