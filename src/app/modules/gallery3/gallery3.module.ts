import {NgModule} from '@angular/core';
import {ContainerModule} from '../../shared/components/container/container.module';
import {HeaderModule} from '../../shared/components/header/header.module';
import {RibbonModule} from '../../shared/components/ribbon/ribbon.module';
import {TranslateModule} from "@ngx-translate/core";
import {Gallery3Component} from './pages/gallery3.component';
import {Gallery3RoutingModule} from './gallery3-routing.module';
import {Gallery8GoldModule} from '../../shared/components/gallery8/gallery8-gold.module';

@NgModule({
  imports: [
    Gallery3RoutingModule,
    ContainerModule,
    HeaderModule,
    RibbonModule,
    TranslateModule,
    Gallery8GoldModule
  ],
  declarations: [Gallery3Component]
})
export class Gallery3Module {
}
