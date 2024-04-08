import {NgModule} from '@angular/core';
import {HeaderComponent} from './header.component';
import {CommonModule} from '@angular/common';
import {GoogleMapModule} from '../google-map/google-map.module';

@NgModule({
	imports:[
		CommonModule,
		GoogleMapModule
	],
	exports: [
		HeaderComponent
	],
	declarations: [
		HeaderComponent
	]
})

export class HeaderModule{}
