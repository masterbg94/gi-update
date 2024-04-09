import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
  },
 {
    path: 'kontakt',
    loadChildren: () => import('./modules/contact/contact.module').then(m => m.ContactModule),
  },
  {
    path: 'galerija/leonardo6',
    loadChildren: () => import('./modules/gallery/gallery.module').then(m => m.GalleryModule),
  },
  {
    path: 'galerija/leonardo7',
    loadChildren: () => import('./modules/gallery2/gallery2.module').then(m => m.Gallery2Module),
  },
  {
    path: 'galerija/leonardo8',
    loadChildren: () => import('./modules/gallery3/gallery3.module').then(m => m.Gallery3Module),
  },
  {
    path: 'onama',
    loadChildren: () => import('./modules/onama/onama.module').then(m => m.OnamaModule),
  },
  {
    path: 'objekat/:id',
    loadChildren: () => import('./modules/objekti/objekti.module').then(m => m.ObjektiModule),
  },
  {
    path: 'objekat/:id/apartman/:aid',
    loadChildren: () => import('./modules/apartman-detail/apartman-detail.module').then(m => m.ApartmanDetailModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
