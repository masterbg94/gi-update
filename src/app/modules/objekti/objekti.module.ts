import {NgModule} from '@angular/core';


import {ContainerModule} from '../../shared/components/container/container.module';
import {HeaderModule} from '../../shared/components/header/header.module';
import {CommonModule} from '@angular/common';
import {ObjektiComponent} from './pages/objekti.component';
import {ObjektiRoutingModule} from './objekti-routing.module';
import {RibbonModule} from '../../shared/components/ribbon/ribbon.module';
import {VideoModule} from '../../shared/components/video/video.module';
import {ReserveModule} from '../../shared/components/reserve/reserve.module';
import {BuildingModule} from '../../shared/components/building/building.module';

import {BlockListModule} from '../../shared/components/block-list/block-list.module';
import {HttpClientModule} from '@angular/common/http';
import {TranslateModule} from "@ngx-translate/core";
import {GoogleMapModule} from "../../shared/components/google-map/google-map.module";

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    ObjektiRoutingModule,
    ContainerModule,
    HeaderModule,
    RibbonModule,
    VideoModule,
    ReserveModule,
    BuildingModule,
    BlockListModule,
    TranslateModule,
    GoogleMapModule
  ],
	declarations: [
		ObjektiComponent,
	]
})
export class ObjektiModule {}
