import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Gallery3Component} from './pages/gallery3.component';

const routes: Routes = [
  {
    path: '',
    component: Gallery3Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Gallery3RoutingModule {
}
