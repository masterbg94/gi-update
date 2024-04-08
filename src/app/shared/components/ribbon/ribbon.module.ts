import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RibbonComponent} from './ribbon.component';

@NgModule({
	imports: [
		CommonModule
	],
	exports: [
		RibbonComponent
	],
	declarations: [
		RibbonComponent
	]
})
export class RibbonModule {}
