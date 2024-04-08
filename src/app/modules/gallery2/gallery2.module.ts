import {NgModule} from '@angular/core';

import {ContainerModule} from '../../shared/components/container/container.module';
import {HeaderModule} from '../../shared/components/header/header.module';
import {RibbonModule} from '../../shared/components/ribbon/ribbon.module';
import {Gallery2Component} from './pages/gallery2.component';
import {Gallery2RoutingModule} from './gallery2-routing.module';
import {GalleryGold2Module} from '../../shared/components/gallery2/gallery2-gold.module';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
	imports: [
		Gallery2RoutingModule,
		ContainerModule,
		HeaderModule,
		RibbonModule,
		GalleryGold2Module,
		TranslateModule
	],
	declarations: [
		Gallery2Component
	]
})
export class Gallery2Module {}
