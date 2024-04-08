import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavMenuCompoenent} from './nav-menu.compoenent';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from '../../../app-routing.module';
import {TranslateModule} from "@ngx-translate/core";
import {CollapseModule} from "ngx-bootstrap/collapse";

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    CollapseModule,
    NgbModule,
    TranslateModule
  ],
  exports: [
    NavMenuCompoenent
  ],
  declarations: [
    NavMenuCompoenent
  ]
})
export class NavMenuModule {
}
