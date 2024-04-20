import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BlockListComponent} from './block-list.component';
import {BlockListItemComponent} from './block-list-item.component';
import {RouterModule} from '@angular/router';
import {TranslateModule} from "@ngx-translate/core";
import {ArraySortPipe} from '../../pipes/filterArrayPipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule
  ],
  exports: [
    BlockListComponent,
    BlockListItemComponent
  ],
  declarations: [
    BlockListComponent,
    BlockListItemComponent,
    ArraySortPipe
  ]
})
export class BlockListModule {
}
