import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SlimComponent} from './slim.component';
import {SlimScroll} from 'angular-io-slimscroll';





@NgModule({
	imports: [
		CommonModule
	],
	exports: [
		SlimComponent
	],
	declarations: [
		SlimComponent,
		SlimScroll
	]
})
export class SlimModule {}
