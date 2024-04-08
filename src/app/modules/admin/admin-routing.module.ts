import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {AdminComponent} from './pages/admin.component';
import {AdminGuard} from '../../shared/guards/admin.guard';

const routes: Routes = [
	{
		path: '',
		component: AdminComponent,
		canActivate: [AdminGuard]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})

export class AdminRoutingModule{}

