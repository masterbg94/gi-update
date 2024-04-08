import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Gallery2Component} from './pages/gallery2.component';

const routes: Routes = [
  {
    path: '',
    component: Gallery2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Gallery2RoutingModule {
}
