import {NgModule} from '@angular/core';

import {GalleryComponent} from './pages/gallery.component';
import {GalleryRoutingModule} from './gallery-routing.module';
import {GalleryGoldModule} from '../../shared/components/gallery-gold/gallery-gold.module';
import {ContainerModule} from '../../shared/components/container/container.module';
import {HeaderModule} from '../../shared/components/header/header.module';
import {RibbonModule} from '../../shared/components/ribbon/ribbon.module';
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
	imports: [
		GalleryRoutingModule,
		GalleryGoldModule,
		ContainerModule,
		HeaderModule,
		RibbonModule,
		TranslateModule
	],
	declarations: [
		GalleryComponent
	]
})
export class GalleryModule {}
