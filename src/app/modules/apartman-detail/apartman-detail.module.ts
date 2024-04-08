import {NgModule} from '@angular/core';
import {ApartmanDetailComponent} from './pages/apartman-detail.component';
import {VideoModule} from '../../shared/components/video/video.module';
import {RibbonModule} from '../../shared/components/ribbon/ribbon.module';

import {ApartmanDetailRoutingModule} from './apartman-detail-routing.module';
import {HeaderModule} from '../../shared/components/header/header.module';
import {ReserveApartmanModule} from '../../shared/components/reserve-apartman/reserve-apartman.module';
import {ApartmanDetailFactsModule} from '../../shared/components/apartman-detail-facts/apartman-detail-facts.module';
import {BlockListModule} from '../../shared/components/block-list/block-list.module';
import {CommonModule} from '@angular/common';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
	imports: [
		CommonModule,
		HeaderModule,
		VideoModule,
		RibbonModule,
		ApartmanDetailRoutingModule,
		ReserveApartmanModule,
		ApartmanDetailFactsModule,
		BlockListModule,
		TranslateModule

	],
	declarations: [
		ApartmanDetailComponent
	]
})

export class ApartmanDetailModule {}
